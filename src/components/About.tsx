import { Shield, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: Shield,
      title: "NCC Licensed",
      description: "Fully licensed by the Nigerian Communications Commission for regulatory legitimacy",
    },
    {
      icon: Award,
      title: "100% Nigerian-Owned",
      description: "Proudly Nigerian, with deep understanding of local market needs",
    },
    {
      icon: TrendingUp,
      title: "High Standards",
      description: "Committed to corporate governance and ethical business operations",
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">About Intelligent Solutions Global Resources Nigeria</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are a leading Nigerian telecommunications company providing comprehensive broadband 
            connectivity, voice services, and infrastructure solutions. Our mission is to deliver 
            reliable, scalable, and cost-effective telecommunication services to businesses and 
            individuals across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <highlight.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
