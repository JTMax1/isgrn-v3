import { Metadata } from "next";
import { ServiceTransactionPage } from "@/components/vtu/ServiceTransactionPage";

export const metadata: Metadata = {
  title: "Buy Education PINs | VTU Services",
  description: "Purchase examination PINs for WAEC, JAMB, NECO, and other educational services with instant delivery.",
};

export default function EducationPage() {
  return <ServiceTransactionPage serviceType="education" />;
}
