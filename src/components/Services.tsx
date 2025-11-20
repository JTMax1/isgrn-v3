import { Wifi, Server, Network, Phone, Smartphone, GraduationCap, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Wifi,
      title: "Broadband Multi-Service Network",
      description: "High-speed data, voice telephony, video conferencing, and surveillance over a single infrastructure. 99.9% availability guarantee with scalable, cost-effective solutions.",
      image: "https://images.unsplash.com/photo-1594915440248-1e419eba6611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwbmV0d29ya3xlbnwxfHx8fDE3NjM0OTE0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Voice telephony and video conferencing",
        "High-speed internet access",
        "Video surveillance capabilities",
        "99.9% uptime SLA",
        "Non-line-of-sight deployment"
      ]
    },
    {
      icon: Server,
      title: "Colocation Services",
      description: "State-of-the-art data center facilities with power redundancy, cooling, fire suppression, network security, and physical connectivity for your critical infrastructure.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVycyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNTQ4ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Uninterrupted power supply",
        "Advanced cooling systems",
        "Fire suppression technology",
        "24/7 network security",
        "High availability infrastructure"
      ]
    },
    {
      icon: Network,
      title: "Metro Connectivity",
      description: "Point-to-point and point-to-multipoint fiber connectivity solutions. Scalable, cost-effective network infrastructure with wide metro coverage.",
      image: "https://images.unsplash.com/photo-1700463108455-956c595bc97b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbnMlMjBuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYzNjAzMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Point-to-point connectivity",
        "Point-to-multipoint solutions",
        "Scalable bandwidth options",
        "Wide metro footprint",
        "Enterprise-grade reliability"
      ]
    },
    {
      icon: Phone,
      title: "Voice Services",
      description: "Comprehensive voice solutions including fixed lines, hosted/on-prem PBX, IVR, virtual receptionist, CRM integration, and contact center functionality.",
      image: "https://images.unsplash.com/photo-1760484560189-b8d3c2477f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBob25lJTIwc3lzdGVtc3xlbnwxfHx8fDE3NjM2MDMzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Traditional fixed telephone lines",
        "Hosted and on-premise PBX",
        "IVR and virtual receptionist",
        "CRM integration",
        "Voice broadcast services"
      ]
    },
    {
      icon: Smartphone,
      title: "Devices & Equipment",
      description: "4G LTE hubs with built-in wireless routers and VoIP softphone apps. Turn any location into a wireless hotspot with our advanced CPE solutions.",
      image: "https://images.unsplash.com/photo-1745847768408-b7b83796cae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHJvdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNjAzMzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "4G LTE wireless hubs",
        "VoIP softphone application",
        "Smart home solutions",
        "Indoor CPE (no masts required)",
        "Multi-service single device"
      ]
    },
    {
      icon: GraduationCap,
      title: "Training Portfolio",
      description: "Professional IT and telecommunications training programs to empower your team with the latest industry knowledge and technical skills.",
      image: "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRyYWluaW5nfGVufDF8fHx8MTc2MzU3MjcxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "IT training programs",
        "Telecom specialist courses",
        "Network administration",
        "Certified instructors",
        "Hands-on practical sessions"
      ]
    },
    {
      icon: Globe,
      title: "IP Wholesale & Backhaul",
      description: "Wholesale IP capacity for ISPs and telecom operators. Infrastructure and bandwidth solutions for large-scale network deployments.",
      image: "https://images.unsplash.com/photo-1700463108455-956c595bc97b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbnMlMjBuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYzNjAzMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "IP wholesale capacity",
        "Backhaul infrastructure",
        "Carrier-grade solutions",
        "Scalable bandwidth",
        "Network interconnection"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive telecommunications and infrastructure solutions designed to meet the 
            diverse needs of businesses and individuals across Nigeria.
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