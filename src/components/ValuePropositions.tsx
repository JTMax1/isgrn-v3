import { Layers, TrendingUp, Shield, Zap, MapPin, Headphones } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function ValuePropositions() {
  const values = [
    {
      icon: Layers,
      title: "Integrated Multi-Service Offering",
      description: "Combine voice, data, video, and surveillance over the same infrastructure and CPE, reducing complexity and cost for customers."
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Start small and grow without replacing hardware. Same modem/CPE can support additional services as your needs expand."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "99.9% network availability guarantee backed by a comprehensive Service Level Agreement (SLA)."
    },
    {
      icon: Zap,
      title: "Flexible Deployment",
      description: "Non-line-of-sight wireless capability means we can reach customers without tall masts, lowering deployment costs."
    },
    {
      icon: MapPin,
      title: "Local Ownership & Compliance",
      description: "100% Nigerian-owned and NCC-licensed, giving us regulatory legitimacy and deep local market understanding."
    },
    {
      icon: Headphones,
      title: "Exceptional Support",
      description: "Dedicated technical support and customer service teams ensuring your business stays connected 24/7."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our unique value propositions and strengths make us the preferred telecommunications 
            partner for businesses and individuals across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-start">
                  <div className="bg-blue-600 p-3 rounded-lg mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="mb-4">Quick Return on Investment</h3>
          <p className="max-w-3xl mx-auto mb-6 text-blue-100">
            Customers can use a single piece of CPE to access multiple services (data, voice, video), 
            dramatically reducing infrastructure costs and complexity while accelerating ROI.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div>
              <div className="text-blue-100 mb-1">Network Availability</div>
              <div className="text-blue-100">99.9%</div>
            </div>
            <div className="border-l border-blue-400 mx-4"></div>
            <div>
              <div className="text-blue-100 mb-1">Single Device</div>
              <div className="text-blue-100">Multiple Services</div>
            </div>
            <div className="border-l border-blue-400 mx-4"></div>
            <div>
              <div className="text-blue-100 mb-1">Deployment</div>
              <div className="text-blue-100">No Masts Required</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
