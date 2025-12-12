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
import { DialogFooter } from "@/components/ui/dialog";
import { PhoneInput } from "../shared/PhoneInput";
import { educationFormSchema, EducationFormData } from "@/lib/vtu/validation";
import { EXAM_TYPES } from "@/lib/vtu/constants";

interface EducationFormProps {
  onSubmit: (data: EducationFormData & { amount: number }) => void;
  onCancel: () => void;
  defaultValues?: Partial<EducationFormData>;
}

export function EducationForm({
  onSubmit,
  onCancel,
  defaultValues,
}: EducationFormProps) {
  const form = useForm<EducationFormData>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: {
      examType: defaultValues?.examType,
      candidatePhone: defaultValues?.candidatePhone || "",
      quantity: defaultValues?.quantity || 1,
      email: defaultValues?.email || "",
    },
  });

  const selectedExamType = form.watch("examType");
  const quantity = form.watch("quantity");

  const selectedExam = EXAM_TYPES.find(e => e.id === selectedExamType);
  const totalAmount = selectedExam ? selectedExam.price * quantity : 0;

  const handleSubmit = (data: EducationFormData) => {
    onSubmit({
      ...data,
      amount: totalAmount,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="examType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Exam Type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select exam type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {EXAM_TYPES.map((exam) => (
                      <SelectItem key={exam.id} value={exam.id}>
                        {exam.name} - ₦{exam.price.toLocaleString()}
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
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity (Number of PINs)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    max={10}
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {totalAmount > 0 && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Total Amount:</span>
              <span className="text-xl font-bold text-blue-600">
                ₦{totalAmount.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="candidatePhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Candidate Phone Number</FormLabel>
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
