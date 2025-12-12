"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogFooter } from "@/components/ui/dialog";
import { NetworkSelector } from "../shared/NetworkSelector";
import { PhoneInput } from "../shared/PhoneInput";
import { dataFormSchema, DataFormData } from "@/lib/vtu/validation";
import { vtuApi } from "@/lib/vtu/api";
import { DataPlan, NetworkType } from "@/lib/vtu/types";
import { Loader2 } from "lucide-react";

interface DataFormProps {
  onSubmit: (data: DataFormData & { planName: string; dataVolume: string; amount: number }) => void;
  onCancel: () => void;
  defaultValues?: Partial<DataFormData>;
}

export function DataForm({
  onSubmit,
  onCancel,
  defaultValues,
}: DataFormProps) {
  const [plans, setPlans] = useState<DataPlan[]>([]);
  const [isLoadingPlans, setIsLoadingPlans] = useState(false);

  const form = useForm<DataFormData>({
    resolver: zodResolver(dataFormSchema),
    defaultValues: {
      network: defaultValues?.network,
      phoneNumber: defaultValues?.phoneNumber || "",
      planId: defaultValues?.planId || "",
      email: defaultValues?.email || "",
    },
  });

  const selectedNetwork = form.watch("network");

  useEffect(() => {
    if (selectedNetwork) {
      setIsLoadingPlans(true);
      vtuApi
        .getDataPlans(selectedNetwork as NetworkType)
        .then((response) => {
          if (response.success && response.data) {
            setPlans(response.data);
          }
        })
        .finally(() => setIsLoadingPlans(false));
    }
  }, [selectedNetwork]);

  const handleSubmit = (data: DataFormData) => {
    const selectedPlan = plans.find(p => p.id === data.planId);
    if (selectedPlan) {
      onSubmit({
        ...data,
        planName: selectedPlan.name,
        dataVolume: selectedPlan.dataVolume,
        amount: selectedPlan.price,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="network"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Network</FormLabel>
              <FormControl>
                <NetworkSelector
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <PhoneInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="planId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Data Plan</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={!selectedNetwork || isLoadingPlans}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={isLoadingPlans ? "Loading plans..." : "Select a plan"} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {isLoadingPlans ? (
                      <SelectItem value="loading" disabled>
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Loading...
                        </div>
                      </SelectItem>
                    ) : (
                      plans.map((plan) => (
                        <SelectItem key={plan.id} value={plan.id}>
                          {plan.name} - ₦{plan.price.toLocaleString()}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Continue to Review</Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
