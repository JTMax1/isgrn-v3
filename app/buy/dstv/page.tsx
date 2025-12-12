import { Metadata } from "next";
import { ServiceTransactionPage } from "@/components/vtu/ServiceTransactionPage";

export const metadata: Metadata = {
  title: "Renew DSTV Subscription | VTU Services",
  description: "Renew your DSTV subscription easily. Choose from all available packages with instant activation.",
};

export default function DSTVPage() {
  return <ServiceTransactionPage serviceType="dstv" />;
}
