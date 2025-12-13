import { Metadata } from "next";
import { Mail, Linkedin, Users, Building2, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export const metadata: Metadata = {
  title: "Our Team | Intelligent Solution Global Resources Nigeria Limited",
  description: "Meet the leadership team and organizational structure of ISGRN - experienced professionals driving innovation in Nigerian telecommunications.",
};

export default function TeamPage() {
  // Board of Directors
  const boardMembers = [
    {
      name: "Olanrewaju Odekunle",
      position: "Director",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Board director providing strategic oversight and governance to ensure ISGRN's continued growth and regulatory compliance.",
    },
    {
      name: "Lu-Shilin Ling",
      position: "Director",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Board director contributing international expertise to ISGRN's strategic direction and partnerships.",
    },
    {
      name: "Ademuyiwa Shotade",
      position: "Director",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Board director guiding ISGRN's corporate strategy and business development initiatives.",
    },
    {
      name: "Giwa B. Abdulrazak",
      position: "Company Secretary",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Ensures corporate governance, regulatory compliance, and effective communication between the board and management.",
    },
  ];

  // Executive Leadership Team
  const executiveTeam = [
    {
      name: "Adebayo Ogunlesi",
      position: "Chief Executive Officer (CEO)",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Over 20 years of experience in telecommunications and infrastructure development across Nigeria. Leads day-to-day operations and strategic execution.",
    },
    {
      name: "Ngozi Eze",
      position: "Chief Operating Officer (COO)",
      image: "https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzUzOTE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Operations expert focused on service delivery excellence, network maintenance, and customer satisfaction across all business units.",
    },
    {
      name: "Ibrahim Mohammed",
      position: "Chief Financial Officer (CFO)",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Financial strategist with expertise in corporate finance, budgeting, and business development in the telecommunications sector.",
    },
    {
      name: "Chidinma Okafor",
      position: "Chief Technology Officer (CTO)",
      image: "https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzUzOTE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Technology visionary with extensive experience in network architecture, telecom infrastructure, and digital transformation initiatives.",
    },
  ];

  // Department Heads
  const departmentHeads = [
    {
      name: "Oluwaseun Adeyemi",
      position: "Head of Technical and Engineering",
      department: "Infrastructure development, fiber deployment, and data center management",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Network engineering specialist with deep expertise in fiber optics, wireless technologies, and telecommunications infrastructure.",
    },
    {
      name: "Amina Bello",
      position: "Head of Operations",
      department: "Service delivery, network maintenance, and customer support",
      image: "https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzUzOTE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Customer experience leader dedicated to ensuring exceptional support and satisfaction for all clients across ISGRN's service portfolio.",
    },
    {
      name: "Tunde Afolabi",
      position: "Head of Sales and Marketing",
      department: "Business development, client acquisition, and service marketing",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Strategic marketing professional driving business growth and expanding ISGRN's client base across government and private sectors.",
    },
    {
      name: "Fatima Yusuf",
      position: "Head of Human Resources",
      department: "Recruitment, training, and employee welfare",
      image: "https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzUzOTE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "HR leader focused on talent development, diversity initiatives, and creating a positive work environment for ISGRN's 100+ professionals.",
    },
    {
      name: "Chukwuma Nwosu",
      position: "Head of Finance and Administration",
      department: "Budgeting, accounting, and administrative functions",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Financial management expert ensuring fiscal responsibility and efficient administrative operations across the organization.",
    },
    {
      name: "Blessing Okoro",
      position: "Head of Legal and Compliance",
      department: "Adherence to NCC regulations and legal standards",
      image: "https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzUzOTE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Legal expert ensuring regulatory compliance with NCC standards and protecting ISGRN's corporate interests.",
    },
  ];

  const departments = [
    {
      name: "Operations Department",
      description: "Service delivery, network maintenance, and customer support",
      icon: Users,
    },
    {
      name: "Technical and Engineering Department",
      description: "Infrastructure development, fiber deployment, and data center management",
      icon: Building2,
    },
    {
      name: "Sales and Marketing Department",
      description: "Business development, client acquisition, and service marketing",
      icon: Award,
    },
    {
      name: "Finance and Administration Department",
      description: "Budgeting, accounting, and administrative functions",
      icon: Building2,
    },
    {
      name: "Human Resources Department",
      description: "Recruitment, training, and employee welfare",
      icon: Users,
    },
    {
      name: "Legal and Compliance Department",
      description: "Adherence to NCC regulations and legal standards",
      icon: Award,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-blue-100" />
            <h1 className="mb-6">Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the experienced professionals driving innovation and excellence in Nigerian telecommunications.
              Our leadership team brings together decades of expertise in technology, business, and operations.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Board of Directors</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our board oversees overall strategy, governance, and compliance to ensure ISGRN's
              continued growth and adherence to regulatory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="mb-1 text-lg">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-3">{member.position}</div>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                      <Mail className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                      <Linkedin className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Executive Leadership</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our executive team manages day-to-day operations and drives strategic initiatives
              to deliver exceptional telecommunications services across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="mb-1 text-lg">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-3">{member.position}</div>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                      <Mail className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                      <Linkedin className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Department Heads</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our departmental leaders ensure efficient operations, innovation, and collaboration
              across all areas of the organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentHeads.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="mb-1 text-lg">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-2">{member.position}</div>
                  <div className="text-gray-500 text-sm mb-3 italic">{member.department}</div>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                      <Mail className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                      <Linkedin className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="mb-4">Organizational Structure</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              ISGRN follows a hierarchical organizational structure promoting collaboration across teams
              while enabling agile responses to market demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <dept.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                  </div>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-blue-50 border-blue-200 inline-block">
              <CardContent className="pt-6">
                <p className="text-gray-700">
                  ISGRN employs over <strong>100 professionals</strong> with an emphasis on{" "}
                  <strong>diversity</strong> and <strong>continuous professional development</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Join Our Team</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology
            and committed to delivering exceptional service. Be part of Nigeria's digital transformation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors border-2 border-white"
            >
              Learn More About ISGRN
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
