import { Headset, Phone, Wifi, Network, MessageSquare, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Headset,
      title: "Call Center Solutions",
      description: "Customized inbound and outbound call center services, including customer support, telemarketing, and automated response systems to optimize business operations and enhance customer engagement.",
      image: "https://images.unsplash.com/photo-1760484560189-b8d3c2477f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBob25lJTIwc3lzdGVtc3xlbnwxfHx8fDE3NjM2MDMzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Inbound customer support",
        "Outbound telemarketing",
        "Automated response systems",
        "Business operations optimization",
        "Enhanced customer engagement"
      ]
    },
    {
      icon: Phone,
      title: "VoIP Services",
      description: "Voice over Internet Protocol (VoIP) solutions for cost-effective voice communication, featuring high-quality calls, video conferencing, and unified communications platforms that integrate seamlessly with existing infrastructure.",
      image: "https://images.unsplash.com/photo-1594915440248-1e419eba6611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwbmV0d29ya3xlbnwxfHx8fDE3NjM0OTE0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Cost-effective voice communication",
        "High-quality calls",
        "Video conferencing",
        "Unified communications platforms",
        "Seamless infrastructure integration"
      ]
    },
    {
      icon: Wifi,
      title: "Data Services",
      description: "High-speed internet and data connectivity options, including broadband and mobile data plans, tailored for reliable access in urban and rural areas.",
      image: "https://images.unsplash.com/photo-1700463108455-956c595bc97b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbnMlMjBuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYzNjAzMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "High-speed internet",
        "Broadband connectivity",
        "Mobile data plans",
        "Urban and rural coverage",
        "Reliable access guarantee"
      ]
    },
    {
      icon: Network,
      title: "Fiber Optic Services",
      description: "Deployment and maintenance of fiber optic networks for ultra-fast, low-latency internet, supporting bandwidth-intensive applications like streaming, cloud computing, and enterprise networking.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVycyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNTQ4ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Ultra-fast internet speeds",
        "Low-latency connectivity",
        "Streaming and cloud support",
        "Enterprise networking",
        "Network deployment and maintenance"
      ]
    },
    {
      icon: MessageSquare,
      title: "Bulk SMS Services",
      description: "Scalable messaging platforms for businesses to send promotional, transactional, and alert SMS in bulk, with features like API integration, scheduling, and analytics for targeted marketing campaigns.",
      image: "https://images.unsplash.com/photo-1745847768408-b7b83796cae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHJvdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNjAzMzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Promotional messaging",
        "Transactional alerts",
        "API integration",
        "Message scheduling",
        "Campaign analytics"
      ]
    },
    {
      icon: Server,
      title: "Data Centers",
      description: "Secure, state-of-the-art data center facilities offering colocation, cloud hosting, disaster recovery, and managed services to ensure data integrity, scalability, and compliance with industry standards.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVycyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNTQ4ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Colocation services",
        "Cloud hosting solutions",
        "Disaster recovery",
        "Managed services",
        "Industry compliance standards"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Delivering innovative and reliable telecom solutions to businesses, government entities,
            and individual clients across Nigeria. Our comprehensive suite of services is backed by
            robust infrastructure and a team of experts, ensuring minimal downtime and compliance
            with regulatory requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}