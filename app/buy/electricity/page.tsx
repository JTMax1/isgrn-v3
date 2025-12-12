import { Metadata } from "next";
import { ServiceTransactionPage } from "@/components/vtu/ServiceTransactionPage";

export const metadata: Metadata = {
  title: "Buy Electricity | VTU Services",
  description: "Pay your electricity bills for all distribution companies (AEDC, EKEDC, IKEDC, and more) with instant token delivery.",
};

export default function ElectricityPage() {
  return <ServiceTransactionPage serviceType="electricity" />;
}
