import { Building2, Users, Handshake, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function ClientsPartners() {
  const stats = [
    {
      icon: Building2,
      value: "500+",
      label: "Enterprise Clients"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Active Subscribers"
    },
    {
      icon: Handshake,
      value: "50+",
      label: "Strategic Partners"
    },
    {
      icon: Award,
      value: "15+",
      label: "Years of Excellence"
    }
  ];

  const clientCategories = [
    {
      title: "Financial Services",
      description: "Leading banks and financial institutions trust us for secure, reliable connectivity."
    },
    {
      title: "Government & Public Sector",
      description: "Providing infrastructure solutions for government agencies and public institutions."
    },
    {
      title: "Healthcare",
      description: "Enabling telemedicine and digital healthcare services with reliable connectivity."
    },
    {
      title: "Education",
      description: "Empowering schools and universities with high-speed internet and collaboration tools."
    },
    {
      title: "Manufacturing & Industry",
      description: "Supporting Industry 4.0 initiatives with robust network infrastructure."
    },
    {
      title: "Telecommunications",
      description: "Wholesale and backhaul services for telcos and ISPs across Nigeria."
    }
  ];

  const partnerTypes = [
    "Technology Vendors",
    "Network Equipment Providers",
    "System Integrators",
    "Cloud Service Providers",
    "International Carriers",
    "Local ISPs"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Clients & Partners</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're proud to serve a diverse range of clients across Nigeria and maintain strategic 
            partnerships with leading technology providers worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-md bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 p-3 rounded-full mb-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-blue-600 mb-1">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Categories */}
        <div className="mb-16">
          <h3 className="text-center mb-8">Industries We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="pt-6">
                  <h4 className="mb-3">{category.title}</h4>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="mb-3">Strategic Partnerships</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with world-class technology partners to deliver cutting-edge 
              telecommunications solutions and ensure the highest quality of service.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {partnerTypes.map((partner, index) => (
              <div
                key={index}
                className="bg-blue-50 px-6 py-3 rounded-full border border-blue-200"
              >
                <span className="text-blue-700">{partner}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Our partnerships enable us to provide comprehensive solutions from leading global brands 
              while maintaining our commitment to local expertise and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
