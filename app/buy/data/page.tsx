import { Metadata } from "next";
import { ServiceTransactionPage } from "@/components/vtu/ServiceTransactionPage";

export const metadata: Metadata = {
  title: "Buy Data Bundle | VTU Services",
  description: "Purchase data bundles for MTN, Glo, Airtel, and 9mobile with instant activation and competitive prices.",
};

export default function DataPage() {
  return <ServiceTransactionPage serviceType="data" />;
}
