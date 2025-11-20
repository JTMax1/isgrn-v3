import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ValuePropositions } from "./components/ValuePropositions";
import { ClientsPartners } from "./components/ClientsPartners";
import { ManagementTeam } from "./components/ManagementTeam";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
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