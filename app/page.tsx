import { Navigation } from "../src/components/Navigation";
import { Hero } from "../src/components/Hero";
import { About } from "../src/components/About";
import { Services } from "../src/components/Services";
import { ValuePropositions } from "../src/components/ValuePropositions";
import { ClientsPartners } from "../src/components/ClientsPartners";
import { ManagementTeam } from "../src/components/ManagementTeam";
import { FAQ } from "../src/components/FAQ";
import { Contact } from "../src/components/Contact";
import { Footer } from "../src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <ValuePropositions />
      <ClientsPartners />
      <ManagementTeam />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
