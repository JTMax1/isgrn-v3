import { Metadata } from "next";
import { ServiceTransactionPage } from "@/components/vtu/ServiceTransactionPage";

export const metadata: Metadata = {
  title: "Buy Internet Subscription | VTU Services",
  description: "Subscribe to internet services from major providers (Smile, Spectranet, and more) with instant activation.",
};

export default function InternetPage() {
  return <ServiceTransactionPage serviceType="internet" />;
}
