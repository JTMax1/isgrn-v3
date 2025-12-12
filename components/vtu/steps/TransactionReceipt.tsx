import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionResult } from "@/lib/vtu/types";
import { formatCurrency, formatDateTime, getServiceName } from "@/lib/vtu/formatting";
import { CheckCircle, Download, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface TransactionReceiptProps {
  result: TransactionResult;
  onClose: () => void;
  onNewTransaction: () => void;
}

export function TransactionReceipt({
  result,
  onClose,
  onNewTransaction,
}: TransactionReceiptProps) {
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const handleDownloadPDF = () => {
    // TODO: Implement PDF download functionality
    toast.info("PDF download will be implemented soon");
  };

  const handleEmailReceipt = async () => {
    setIsSendingEmail(true);
    try {
      // TODO: Implement email sending functionality
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast.success("Receipt sent to your email");
    } catch (error) {
      toast.error("Failed to send email receipt");
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Success Animation */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Transaction Successful!
        </h3>
        <p className="text-gray-600">
          {result.message}
        </p>
      </div>

      {/* Transaction Details Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Transaction Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Transaction ID</span>
            <span className="font-mono text-sm font-medium">
              {result.transactionId}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Reference</span>
            <span className="font-mono text-sm font-medium">
              {result.reference}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Service</span>
            <span className="font-medium">
              {getServiceName(result.data.serviceType)}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Amount</span>
            <span className="font-bold text-lg text-blue-600">
              {formatCurrency(result.data.amount)}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Date & Time</span>
            <span className="text-sm">
              {formatDateTime(result.timestamp)}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Button
          variant="outline"
          onClick={handleDownloadPDF}
          className="w-full"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
        <Button
          variant="outline"
          onClick={handleEmailReceipt}
          disabled={isSendingEmail}
          className="w-full"
        >
          <Mail className="w-4 h-4 mr-2" />
          {isSendingEmail ? "Sending..." : "Email Receipt"}
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button variant="outline" onClick={onClose} className="flex-1">
          Close
        </Button>
        <Button onClick={onNewTransaction} className="flex-1">
          Make Another Transaction
        </Button>
      </div>
    </div>
  );
}
