import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { TransactionSummary } from "../shared/TransactionSummary";
import { VTUTransaction } from "@/lib/vtu/types";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ReviewConfirmationProps {
  transaction: Partial<VTUTransaction>;
  onConfirm: () => void;
  onEdit: () => void;
  onCancel: () => void;
  isProcessing?: boolean;
  error?: string | null;
}

export function ReviewConfirmation({
  transaction,
  onConfirm,
  onEdit,
  onCancel,
  isProcessing = false,
  error,
}: ReviewConfirmationProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Review Your Transaction</h3>
        <p className="text-gray-600 text-sm">
          Please review your transaction details before proceeding to payment.
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <TransactionSummary transaction={transaction} showAmount={true} />

      <DialogFooter className="flex gap-2">
        <Button type="button" variant="outline" onClick={onCancel} disabled={isProcessing}>
          Cancel
        </Button>
        <Button type="button" variant="outline" onClick={onEdit} disabled={isProcessing}>
          Edit
        </Button>
        <Button type="button" onClick={onConfirm} disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Confirm & Pay"}
        </Button>
      </DialogFooter>
    </div>
  );
}
