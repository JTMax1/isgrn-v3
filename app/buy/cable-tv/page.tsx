import { Metadata } from "next";
import { ServiceTransactionPage } from "@/components/vtu/ServiceTransactionPage";

export const metadata: Metadata = {
  title: "Renew Cable TV | VTU Services",
  description: "Renew your GOtv or Startimes subscription with instant activation and multiple package options.",
};

export default function CableTVPage() {
  return <ServiceTransactionPage serviceType="cable-tv" />;
}
