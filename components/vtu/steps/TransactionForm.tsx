import { VTUServiceType } from "@/lib/vtu/types";
import { AirtimeForm } from "../forms/AirtimeForm";
import { DataForm } from "../forms/DataForm";
import { DSTVForm } from "../forms/DSTVForm";
import { ElectricityForm } from "../forms/ElectricityForm";
import { CableTVForm } from "../forms/CableTVForm";
import { InternetForm } from "../forms/InternetForm";
import { EducationForm } from "../forms/EducationForm";
import { BettingForm } from "../forms/BettingForm";

interface TransactionFormProps {
  serviceType: VTUServiceType;
  onSubmit: (data: any) => void;
  onCancel: () => void;
  defaultValues?: any;
}

export function TransactionForm({
  serviceType,
  onSubmit,
  onCancel,
  defaultValues,
}: TransactionFormProps) {
  switch (serviceType) {
    case "airtime":
      return (
        <AirtimeForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          defaultValues={defaultValues}
        />
      );
    case "data":
      return (
        <DataForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          defaultValues={defaultValues}
        />
      );
    case "dstv":
      return (
        <DSTVForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          defaultValues={defaultValues}
        />
      );
    case "electricity":
      return (
        <ElectricityForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          defaultValues={defaultValues}
        />
      );
    case "cable-tv":
      return (
        <CableTVForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          defaultValues={defaultValues}
        />
      );
    case "internet":
      return (
        <InternetForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          defaultValues={defaultValues}
        />
      );
    case "education":
      return (
        <EducationForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          defaultValues={defaultValues}
        />
      );
    case "betting":
      return (
        <BettingForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          defaultValues={defaultValues}
        />
      );
    default:
      return <div>Invalid service type</div>;
  }
}
