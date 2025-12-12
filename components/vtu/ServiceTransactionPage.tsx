"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { VTUServiceType, TransactionResult, VTUTransaction } from "@/lib/vtu/types";
import { getServiceName } from "@/lib/vtu/formatting";
import { Breadcrumb } from "./shared/Breadcrumb";
import { StepIndicator } from "./shared/StepIndicator";
import { LoadingState } from "./shared/LoadingState";
import { TransactionForm } from "./steps/TransactionForm";
import { ReviewConfirmation } from "./steps/ReviewConfirmation";
import { TransactionReceipt } from "./steps/TransactionReceipt";
import { vtuApi } from "@/lib/vtu/api";
import { toast } from "sonner";

interface ServiceTransactionPageProps {
  serviceType: VTUServiceType;
}

const STEPS = [
  { number: 1, label: "Details" },
  { number: 2, label: "Review" },
  { number: 3, label: "Receipt" },
];

export function ServiceTransactionPage({ serviceType }: ServiceTransactionPageProps) {
  const router = useRouter();
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

  const handleCancel = () => {
    router.push("/services");
  };

  const handleClose = () => {
    router.push("/services");
  };

  const handleNewTransaction = () => {
    router.push("/services");
  };

  const serviceName = getServiceName(serviceType);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb serviceName={serviceName} />

          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={handleCancel}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
          </div>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {serviceName}
            </h1>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Support Text */}
          <div className="text-center mb-12">
            <p className="text-gray-600">
              We usually respond within 5 minutes 8:00am to 10:00pm Nigerian time.
            </p>
            <p className="text-gray-600">
              For instant response, kindly reach out using our chat.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Image */}
            <div className="flex items-start justify-center">
              <div className="w-full max-w-md">
                <img
                  src="/images/airtime-phone.jpg"
                  alt="Mobile phone with calculator"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.currentTarget.src = "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80";
                  }}
                />
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              {currentStep < 3 && (
                <StepIndicator currentStep={currentStep} steps={STEPS} />
              )}

              {currentStep === 1 && (
                <TransactionForm
                  serviceType={serviceType}
                  onSubmit={handleFormSubmit}
                  onCancel={handleCancel}
                  defaultValues={formData}
                />
              )}

              {currentStep === 2 && (
                <ReviewConfirmation
                  transaction={formData}
                  onConfirm={handleConfirm}
                  onEdit={handleEdit}
                  onCancel={handleCancel}
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
            </div>
          </div>
        </div>

        <LoadingState
          isLoading={isProcessing}
          title="Processing Transaction"
          message="Please wait while we process your payment..."
        />
      </div>
    </div>
  );
}
