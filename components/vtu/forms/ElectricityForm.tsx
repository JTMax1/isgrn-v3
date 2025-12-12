"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { DialogFooter } from "@/components/ui/dialog";
import { PhoneInput } from "../shared/PhoneInput";
import { AmountInput } from "../shared/AmountInput";
import { electricityFormSchema, ElectricityFormData } from "@/lib/vtu/validation";
import { ELECTRICITY_DISCOS } from "@/lib/vtu/constants";

interface ElectricityFormProps {
  onSubmit: (data: ElectricityFormData) => void;
  onCancel: () => void;
  defaultValues?: Partial<ElectricityFormData>;
}

export function ElectricityForm({
  onSubmit,
  onCancel,
  defaultValues,
}: ElectricityFormProps) {
  const form = useForm<ElectricityFormData>({
    resolver: zodResolver(electricityFormSchema),
    defaultValues: {
      disco: defaultValues?.disco || "",
      meterNumber: defaultValues?.meterNumber || "",
      meterType: defaultValues?.meterType || "prepaid",
      amount: defaultValues?.amount || 0,
      phoneNumber: defaultValues?.phoneNumber || "",
      email: defaultValues?.email || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="disco"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Distribution Company (DISCO)</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select DISCO" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {ELECTRICITY_DISCOS.map((disco) => (
                      <SelectItem key={disco.id} value={disco.id}>
                        {disco.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="meterNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meter Number</FormLabel>
                <FormControl>
                  <Input placeholder="12345678901" maxLength={11} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="meterType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meter Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="prepaid" id="prepaid" />
                    <Label htmlFor="prepaid">Prepaid</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="postpaid" id="postpaid" />
                    <Label htmlFor="postpaid">Postpaid</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <AmountInput
                    value={field.value}
                    onChange={field.onChange}
                    min={500}
                    max={100000}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
