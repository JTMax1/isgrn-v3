import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VTUTransaction } from "@/lib/vtu/types";
import { formatCurrency, formatPhoneNumberDisplay, getServiceName } from "@/lib/vtu/formatting";
import { Separator } from "@/components/ui/separator";

interface TransactionSummaryProps {
  transaction: Partial<VTUTransaction>;
  showAmount?: boolean;
}

export function TransactionSummary({
  transaction,
  showAmount = true,
}: TransactionSummaryProps) {
  const renderField = (label: string, value: string | number | undefined) => {
    if (!value) return null;
    return (
      <div className="flex justify-between py-2">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium text-gray-900">{value}</span>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Transaction Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {renderField("Service", transaction.serviceType ? getServiceName(transaction.serviceType) : undefined)}

        {/* Service-specific fields */}
        {'network' in transaction && renderField("Network", transaction.network?.toUpperCase())}
        {'phoneNumber' in transaction && renderField(
          "Phone Number",
          transaction.phoneNumber ? formatPhoneNumberDisplay(transaction.phoneNumber) : undefined
        )}
        {'planName' in transaction && renderField("Data Plan", transaction.planName)}
        {'dataVolume' in transaction && renderField("Data Volume", transaction.dataVolume)}
        {'decoderNumber' in transaction && renderField("Decoder Number", transaction.decoderNumber)}
        {'packageName' in transaction && renderField("Package", transaction.packageName)}
        {'disco' in transaction && renderField("DISCO", transaction.disco)}
        {'meterNumber' in transaction && renderField("Meter Number", transaction.meterNumber)}
        {'meterType' in transaction && renderField("Meter Type", transaction.meterType ? transaction.meterType.charAt(0).toUpperCase() + transaction.meterType.slice(1) : undefined)}
        {'provider' in transaction && renderField("Provider", transaction.provider)}
        {'accountNumber' in transaction && renderField("Account Number", transaction.accountNumber)}
        {'examType' in transaction && renderField("Exam Type", transaction.examType?.toUpperCase())}
        {'candidatePhone' in transaction && renderField(
          "Candidate Phone",
          transaction.candidatePhone ? formatPhoneNumberDisplay(transaction.candidatePhone) : undefined
        )}
        {'quantity' in transaction && renderField("Quantity", transaction.quantity)}
        {'platform' in transaction && renderField("Platform", transaction.platform)}
        {'userId' in transaction && renderField("User ID", transaction.userId)}

        {renderField("Email", transaction.email)}

        {showAmount && transaction.amount && (
          <>
            <Separator className="my-2" />
            <div className="flex justify-between py-2">
              <span className="text-lg font-semibold text-gray-900">Total Amount</span>
              <span className="text-lg font-bold text-blue-600">
                {formatCurrency(transaction.amount)}
              </span>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
