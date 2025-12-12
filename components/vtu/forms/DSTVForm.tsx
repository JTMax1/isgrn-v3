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
import { PhoneInput } from "../shared/PhoneInput";
import { dstvFormSchema, DSTVFormData } from "@/lib/vtu/validation";
import { vtuApi } from "@/lib/vtu/api";
import { DSTVPackage } from "@/lib/vtu/types";
import { Loader2 } from "lucide-react";

interface DSTVFormProps {
  onSubmit: (data: DSTVFormData & { packageName: string; amount: number }) => void;
  onCancel: () => void;
  defaultValues?: Partial<DSTVFormData>;
}

export function DSTVForm({
  onSubmit,
  onCancel,
  defaultValues,
}: DSTVFormProps) {
  const [packages, setPackages] = useState<DSTVPackage[]>([]);
  const [isLoadingPackages, setIsLoadingPackages] = useState(true);

  const form = useForm<DSTVFormData>({
    resolver: zodResolver(dstvFormSchema),
    defaultValues: {
      decoderNumber: defaultValues?.decoderNumber || "",
      packageId: defaultValues?.packageId || "",
      phoneNumber: defaultValues?.phoneNumber || "",
      email: defaultValues?.email || "",
    },
  });

  useEffect(() => {
    vtuApi
      .getDSTVPackages()
      .then((response) => {
        if (response.success && response.data) {
          setPackages(response.data);
        }
      })
      .finally(() => setIsLoadingPackages(false));
  }, []);

  const handleSubmit = (data: DSTVFormData) => {
    const selectedPackage = packages.find(p => p.id === data.packageId);
    if (selectedPackage) {
      onSubmit({
        ...data,
        packageName: selectedPackage.name,
        amount: selectedPackage.price,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="decoderNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Decoder Number (IUC)</FormLabel>
                <FormControl>
                  <Input placeholder="1234567890" maxLength={10} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="packageId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Package</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={isLoadingPackages}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={isLoadingPackages ? "Loading packages..." : "Select a package"} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {isLoadingPackages ? (
                      <SelectItem value="loading" disabled>
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Loading...
                        </div>
                      </SelectItem>
                    ) : (
                      packages.map((pkg) => (
                        <SelectItem key={pkg.id} value={pkg.id}>
                          {pkg.name} - ₦{pkg.price.toLocaleString()}
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
        </div>

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
