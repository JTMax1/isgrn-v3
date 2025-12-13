import { Metadata } from "next";
import { Building2, Users, Award, Target, History, MapPin, Mail, Phone, Shield, TrendingUp, Globe, Network } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us | Intelligent Solution Global Resources Nigeria Limited",
  description: "Learn about ISGRN - a leading Nigerian telecommunications company providing innovative telecom solutions, data services, and digital infrastructure since 2007.",
};

export default function AboutPage() {
  const highlights = [
    {
      icon: Shield,
      title: "NCC Licensed",
      description: "Fully licensed by the Nigerian Communications Commission under code CL/S&I/607/07 for regulatory legitimacy",
    },
    {
      icon: Award,
      title: "100% Nigerian-Owned",
      description: "Proudly Nigerian with deep understanding of local market needs and digital transformation goals",
    },
    {
      icon: TrendingUp,
      title: "High Standards",
      description: "Committed to corporate governance, ethical business operations, and customer-centric innovation",
    },
    {
      icon: Globe,
      title: "Comprehensive Solutions",
      description: "Full-service provider offering telecommunications, data services, and infrastructure management",
    },
  ];

  const services = [
    {
      icon: Phone,
      title: "Call Center Solutions",
      description: "Customized inbound and outbound call center services, including customer support, telemarketing, and automated response systems.",
    },
    {
      icon: Network,
      title: "VoIP Services",
      description: "Cost-effective voice communication with high-quality calls, video conferencing, and unified communications platforms.",
    },
    {
      icon: Globe,
      title: "Data Services",
      description: "High-speed internet and data connectivity options, including broadband and mobile data plans for urban and rural areas.",
    },
    {
      icon: Network,
      title: "Fiber Optic Services",
      description: "Deployment and maintenance of fiber optic networks for ultra-fast, low-latency internet supporting bandwidth-intensive applications.",
    },
    {
      icon: Phone,
      title: "Bulk SMS Services",
      description: "Scalable messaging platforms with API integration, scheduling, and analytics for targeted marketing campaigns.",
    },
    {
      icon: Building2,
      title: "Data Centers",
      description: "Secure data center facilities offering colocation, cloud hosting, disaster recovery, and managed services.",
    },
  ];

  const departments = [
    "Operations Department - Service delivery, network maintenance, and customer support",
    "Technical and Engineering Department - Infrastructure development, fiber deployment, and data center management",
    "Sales and Marketing Department - Business development, client acquisition, and service marketing",
    "Finance and Administration Department - Budgeting, accounting, and administrative functions",
    "Human Resources Department - Recruitment, training, and employee welfare",
    "Legal and Compliance Department - Adherence to NCC regulations and legal standards",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6">About Intelligent Solution Global Resources Nigeria Limited</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Bridging the digital divide with innovative telecommunications solutions since 2007
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Intelligent Solution Global Resources Nigeria Limited (ISGRN) is a dynamic telecommunications
                  company headquartered in Abuja, Nigeria. Established as a private unlimited company, ISGRN
                  specializes in delivering innovative and reliable telecom solutions to businesses, government
                  entities, and individual clients across Nigeria.
                </p>
                <p>
                  With a focus on bridging the digital divide, we leverage cutting-edge technology to provide
                  seamless connectivity, communication, and data management services. ISGRN holds a Class License
                  from the Nigerian Communications Commission (NCC) under code CL/S&I/607/07, authorizing us for
                  sales, installation, and related telecom activities.
                </p>
                <p>
                  We are committed to fostering digital transformation in Nigeria's growing economy, emphasizing
                  affordability, reliability, and customer-centric innovation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <highlight.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h4 className="mb-2">{highlight.title}</h4>
                      <p className="text-gray-600 text-sm">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <History className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="mb-4">Our History</h2>
            </div>
            <div className="space-y-6 text-gray-600">
              <p>
                Founded on July 26, 2007, and registered with the Corporate Affairs Commission (CAC) under
                registration number RC 700993, ISGRN began operations in Abuja's Federal Capital Territory (FCT).
                Initially focused on telecom equipment sales and installations, the company has evolved into a
                full-service provider in response to Nigeria's expanding digital landscape.
              </p>
              <p>
                Over the years, ISGRN has adapted to technological advancements, expanding its portfolio to
                include advanced communication and data services. Key milestones include obtaining our NCC
                license in 2007 and establishing partnerships with global tech firms to enhance service delivery.
              </p>
              <p>
                Today, ISGRN operates from our head office at 1 Nepa Close, Off Gwarimpa Express Road, Kubwa Road,
                Abuja, serving a diverse clientele while contributing to Nigeria's telecom sector growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of telecommunications services designed to meet the needs of
              modern enterprises and consumers, backed by robust infrastructure and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="mb-4">Organizational Structure</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              ISGRN follows a standard hierarchical organizational structure to ensure efficient operations,
              clear accountability, and strategic decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Board of Directors</CardTitle>
                <CardDescription>
                  Oversees overall strategy, governance, and compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Olanrewaju Odekunle - Director</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Lu-Shilin Ling - Director</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Ademuyiwa Shotade - Director</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Giwa B. Abdulrazak - Company Secretary</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Executive Leadership</CardTitle>
                <CardDescription>
                  Manages day-to-day operations and reports to the board
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Chief Executive Officer (CEO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Chief Operating Officer (COO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Chief Financial Officer (CFO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Chief Technology Officer (CTO)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Departmental Structure</CardTitle>
              <CardDescription>
                Functional departments promoting collaboration and agile responses to market demands
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>{dept}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-600">
                ISGRN employs over 100 professionals with an emphasis on diversity and continuous
                professional development.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-blue-600 text-white border-0">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-8 w-8" />
                  <CardTitle className="text-white">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  To deliver reliable, scalable, and cost-effective telecommunication services to businesses
                  and individuals across Nigeria, fostering digital transformation and bridging the digital
                  divide through innovative technology and customer-centric solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-700 to-blue-900 text-white border-0">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-8 w-8" />
                  <CardTitle className="text-white">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  To be the leading telecommunications provider in Nigeria, recognized for innovation,
                  reliability, and excellence in service delivery, while contributing to the nation's
                  economic growth through sustainable digital infrastructure development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Contact Information</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for inquiries about our services and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="mb-2">Head Office</h4>
                  <p className="text-gray-600 text-sm">
                    1 Nepa Close, Off Gwarimpa Express Road, Kubwa Road, Abuja, FCT, Nigeria
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="mb-2">Email</h4>
                  <a
                    href="mailto:info@isgrn.com"
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    info@isgrn.com
                  </a>
                  <p className="text-gray-600 text-sm mt-1">General inquiries</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="mb-2">Website</h4>
                  <a
                    href="https://www.isgrn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    www.isgrn.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-blue-50 border-blue-200 inline-block">
              <CardContent className="pt-6">
                <p className="text-gray-700">
                  <strong>Company Registration:</strong> RC 700993 (Corporate Affairs Commission)
                  <br />
                  <strong>NCC License:</strong> CL/S&I/607/07
                  <br />
                  <strong>Established:</strong> July 26, 2007
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Ready to Transform Your Connectivity?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with ISGRN for reliable telecommunications solutions that drive your business forward
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-white"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
