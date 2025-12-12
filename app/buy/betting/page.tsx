import { Metadata } from "next";
import { ServiceTransactionPage } from "@/components/vtu/ServiceTransactionPage";

export const metadata: Metadata = {
  title: "Fund Betting Wallet | VTU Services",
  description: "Fund your betting wallet on popular platforms (Bet9ja, 1xBet, NairaBet, and more) with instant credit.",
};

export default function BettingPage() {
  return <ServiceTransactionPage serviceType="betting" />;
}
