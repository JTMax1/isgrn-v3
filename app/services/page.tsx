import { Metadata } from "next";
import {
  Phone,
  Headphones,
  Wifi,
  Network,
  MessageSquare,
  Server,
  Globe,
  Building2,
  Smartphone,
  Shield,
  Zap,
  Users,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export const metadata: Metadata = {
  title: "Our Services | Telecommunications Solutions | ISGRN",
  description: "Comprehensive telecommunications services including Call Center Solutions, VoIP, Data Services, Fiber Optic, Bulk SMS, and Data Centers. Backed by robust infrastructure and regulatory compliance.",
};

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Headphones,
      title: "Call Center Solutions",
      description: "Customized inbound and outbound call center services, including customer support, telemarketing, and automated response systems to optimize business operations and enhance customer engagement.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxsJTIwY2VudGVyJTIwc2VydmljZXN8ZW58MXx8fHwxNzYzNjAzMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Inbound customer support services",
        "Outbound telemarketing campaigns",
        "Automated response systems (IVR)",
        "Multi-channel support (voice, email, chat)",
        "Quality monitoring and reporting",
        "24/7 availability options",
        "CRM integration capabilities"
      ]
    },
    {
      icon: Phone,
      title: "VoIP Services",
      description: "Voice over Internet Protocol (VoIP) solutions for cost-effective voice communication, featuring high-quality calls, video conferencing, and unified communications platforms that integrate seamlessly with existing infrastructure.",
      image: "https://images.unsplash.com/photo-1760484560189-b8d3c2477f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBob25lJTIwc3lzdGVtc3xlbnwxfHx8fDE3NjM2MDMzODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "High-quality voice calls over IP",
        "Video conferencing solutions",
        "Unified communications platform",
        "Hosted and on-premise PBX options",
        "Mobile softphone applications",
        "Cost-effective international calling",
        "Seamless infrastructure integration"
      ]
    },
    {
      icon: Wifi,
      title: "Data Services",
      description: "High-speed internet and data connectivity options, including broadband and mobile data plans, tailored for reliable access in urban and rural areas.",
      image: "https://images.unsplash.com/photo-1594915440248-1e419eba6611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwbmV0d29ya3xlbnwxfHx8fDE3NjM0OTE0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "High-speed broadband internet",
        "Mobile data connectivity plans",
        "Scalable bandwidth options",
        "Urban and rural coverage",
        "Dedicated internet access",
        "Symmetric upload/download speeds",
        "Service level agreements (SLA)"
      ]
    },
    {
      icon: Network,
      title: "Fiber Optic Services",
      description: "Deployment and maintenance of fiber optic networks for ultra-fast, low-latency internet, supporting bandwidth-intensive applications like streaming, cloud computing, and enterprise networking.",
      image: "https://images.unsplash.com/photo-1700463108455-956c595bc97b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbnMlMjBuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYzNjAzMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Ultra-fast fiber optic deployment",
        "Low-latency connectivity",
        "Point-to-point fiber links",
        "Metro area network solutions",
        "Support for streaming & cloud apps",
        "Enterprise-grade networking",
        "Professional installation & maintenance"
      ]
    },
    {
      icon: MessageSquare,
      title: "Bulk SMS Services",
      description: "Scalable messaging platforms for businesses to send promotional, transactional, and alert SMS in bulk, with features like API integration, scheduling, and analytics for targeted marketing campaigns.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBtZXNzYWdpbmd8ZW58MXx8fHwxNzYzNjAzMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Bulk SMS messaging platform",
        "Promotional & transactional SMS",
        "Alert & notification services",
        "RESTful API integration",
        "Message scheduling capabilities",
        "Campaign analytics & reporting",
        "Targeted marketing tools"
      ]
    },
    {
      icon: Server,
      title: "Data Centers",
      description: "Secure, state-of-the-art data center facilities offering colocation, cloud hosting, disaster recovery, and managed services to ensure data integrity, scalability, and compliance with industry standards.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVycyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNTQ4ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Secure colocation facilities",
        "Cloud hosting solutions",
        "Disaster recovery services",
        "Managed IT services",
        "Power redundancy & backup",
        "Advanced cooling systems",
        "24/7 security & monitoring",
        "Industry compliance standards"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Wifi,
      title: "Broadband Multi-Service Network",
      description: "High-speed data, voice telephony, video conferencing, and surveillance over a single infrastructure with 99.9% availability guarantee.",
      features: [
        "Voice telephony and video conferencing",
        "High-speed internet access",
        "Video surveillance capabilities",
        "99.9% uptime SLA",
        "Non-line-of-sight deployment"
      ]
    },
    {
      icon: Network,
      title: "Metro Connectivity",
      description: "Point-to-point and point-to-multipoint fiber connectivity solutions with scalable, cost-effective network infrastructure.",
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
      description: "Comprehensive voice solutions including fixed lines, PBX systems, IVR, virtual receptionist, and CRM integration.",
      features: [
        "Traditional fixed telephone lines",
        "Hosted and on-premise PBX",
        "IVR and virtual receptionist",
        "CRM integration",
        "Voice broadcast services",
        "Contact center functionality"
      ]
    },
    {
      icon: Smartphone,
      title: "Devices & Equipment",
      description: "4G LTE hubs with built-in wireless routers and VoIP softphone apps to turn any location into a wireless hotspot.",
      features: [
        "4G LTE wireless hubs",
        "VoIP softphone application",
        "Smart home solutions",
        "Indoor CPE (no masts required)",
        "Multi-service single device"
      ]
    },
    {
      icon: Globe,
      title: "IP Wholesale & Backhaul",
      description: "Wholesale IP capacity for ISPs and telecom operators with infrastructure solutions for large-scale network deployments.",
      features: [
        "IP wholesale capacity",
        "Backhaul infrastructure",
        "Carrier-grade solutions",
        "Scalable bandwidth",
        "Network interconnection"
      ]
    }
  ];

  const serviceHighlights = [
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "All services backed by NCC licensing and industry standards"
    },
    {
      icon: Zap,
      title: "High Availability",
      description: "99.9% uptime guarantee with robust infrastructure"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "100+ professionals ready to assist with technical support"
    },
    {
      icon: CheckCircle2,
      title: "Proven Track Record",
      description: "18+ years of experience serving Nigeria's telecom needs"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6">Our Telecommunications Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive telecommunications and infrastructure solutions designed to meet the
              diverse needs of businesses and individuals across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceHighlights.map((highlight, index) => (
              <Card key={index} className="text-center pb-8">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <highlight.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="mb-2">{highlight.title}</h4>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Core Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our flagship telecommunications services backed by robust infrastructure,
              expert support, and regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
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
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
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

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Additional Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Extended telecommunications services to complement your infrastructure needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow pb-8">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
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

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose ISGRN?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence with customer-focused service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="pb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-2">Robust Infrastructure</h4>
                    <p className="text-gray-600 text-sm">
                      State-of-the-art facilities with redundant power, cooling, and security
                      systems ensuring minimal downtime and maximum reliability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-2">Regulatory Compliance</h4>
                    <p className="text-gray-600 text-sm">
                      NCC licensed (CL/S&I/607/07) with full compliance to industry standards
                      and best practices in telecommunications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-2">Expert Team</h4>
                    <p className="text-gray-600 text-sm">
                      Over 100 professionals with expertise in telecommunications, engineering,
                      and customer service across all departments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-2">Proven Experience</h4>
                    <p className="text-gray-600 text-sm">
                      18+ years of excellence serving businesses, government entities, and
                      individuals across Nigeria since 2007.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-2">High Availability</h4>
                    <p className="text-gray-600 text-sm">
                      99.9% uptime SLA with redundant systems, backup power, and proactive
                      monitoring for uninterrupted service delivery.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-2">Nationwide Coverage</h4>
                    <p className="text-gray-600 text-sm">
                      Extensive network infrastructure covering urban and rural areas with
                      scalable solutions for businesses of all sizes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-linear-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Ready to Transform Your Connectivity?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with ISGRN for reliable telecommunications solutions that drive your business forward.
            Contact us today to discuss your requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-white"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
