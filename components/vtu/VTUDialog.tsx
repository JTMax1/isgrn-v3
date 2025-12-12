"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VTUServiceType, TransactionResult, VTUTransaction } from "@/lib/vtu/types";
import { getServiceName } from "@/lib/vtu/formatting";
import { StepIndicator } from "./shared/StepIndicator";
import { LoadingState } from "./shared/LoadingState";
import { TransactionForm } from "./steps/TransactionForm";
import { ReviewConfirmation } from "./steps/ReviewConfirmation";
import { TransactionReceipt } from "./steps/TransactionReceipt";
import { vtuApi } from "@/lib/vtu/api";
import { toast } from "sonner";

interface VTUDialogProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: VTUServiceType | null;
}

const STEPS = [
  { number: 1, label: "Details" },
  { number: 2, label: "Review" },
  { number: 3, label: "Receipt" },
];

export function VTUDialog({ isOpen, onClose, serviceType }: VTUDialogProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<VTUTransaction>>({});
  const [transactionResult, setTransactionResult] = useState<TransactionResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = (data: any) => {
    setFormData({
      ...data,
      serviceType,
      timestamp: new Date().toISOString(),
    });
    setError(null);
    setCurrentStep(2);
  };

  const handleEdit = () => {
    setCurrentStep(1);
    setError(null);
  };

  const handleConfirm = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      let response;

      // Route to appropriate API based on service type
      switch (serviceType) {
        case "airtime":
          response = await vtuApi.purchaseAirtime(formData);
          break;
        case "data":
          response = await vtuApi.purchaseData(formData);
          break;
        case "dstv":
          response = await vtuApi.purchaseDSTV(formData);
          break;
        case "electricity":
          response = await vtuApi.purchaseElectricity(formData);
          break;
        case "cable-tv":
          response = await vtuApi.purchaseCableTV(formData);
          break;
        case "internet":
          response = await vtuApi.purchaseInternet(formData);
          break;
        case "education":
          response = await vtuApi.purchaseEducation(formData);
          break;
        case "betting":
          response = await vtuApi.purchaseBetting(formData);
          break;
        default:
          throw new Error("Invalid service type");
      }

      if (response.success && response.data) {
        setTransactionResult(response.data);
        setCurrentStep(3);
        toast.success("Transaction completed successfully!");
      } else {
        throw new Error(response.message || "Transaction failed");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Transaction failed";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setFormData({});
    setTransactionResult(null);
    setError(null);
    onClose();
  };

  const handleNewTransaction = () => {
    setCurrentStep(1);
    setFormData({});
    setTransactionResult(null);
    setError(null);
  };

  if (!serviceType) return null;
  console.log(isOpen)

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className={currentStep === 3 ? "max-w-xl" : "max-w-2xl"}>
          <DialogHeader>
            <DialogTitle>{getServiceName(serviceType)}</DialogTitle>
          </DialogHeader>

          {currentStep < 3 && (
            <StepIndicator currentStep={currentStep} steps={STEPS} />
          )}

          {currentStep === 1 && (
            <TransactionForm
              serviceType={serviceType}
              onSubmit={handleFormSubmit}
              onCancel={handleClose}
              defaultValues={formData}
            />
          )}

          {currentStep === 2 && (
            <ReviewConfirmation
              transaction={formData}
              onConfirm={handleConfirm}
              onEdit={handleEdit}
              onCancel={handleClose}
              isProcessing={isProcessing}
              error={error}
            />
          )}

          {currentStep === 3 && transactionResult && (
            <TransactionReceipt
              result={transactionResult}
              onClose={handleClose}
              onNewTransaction={handleNewTransaction}
            />
          )}
        </DialogContent>
      </Dialog>

      <LoadingState
        isLoading={isProcessing}
        title="Processing Transaction"
        message="Please wait while we process your payment..."
      />
    </>
  );
}
