import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { ValuePropositions } from "../components/ValuePropositions";
import { ClientsPartners } from "../components/ClientsPartners";
import { ManagementTeam } from "../components/ManagementTeam";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <ValuePropositions />
      <ClientsPartners />
      <ManagementTeam />
      <FAQ />
      <Contact />
    </div>
  );
}
