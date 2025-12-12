import { Metadata } from "next";
import { VTUServices } from "@/components/vtu/VTUServices";

export const metadata: Metadata = {
  title: "VTU Services | Quick Top-Up & Bill Payments",
  description: "Buy airtime, data bundles, pay for DSTV, electricity, cable TV, internet, education PINs, and fund betting wallets. All in one place with instant delivery and secure payments.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <VTUServices />
    </main>
  );
}
