import { Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ManagementTeam() {
  const team = [
    {
      name: "Adebayo Ogunlesi",
      position: "Managing Director / CEO",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Over 20 years of experience in telecommunications and infrastructure development across Nigeria."
    },
    {
      name: "Chidinma Okafor",
      position: "Chief Technology Officer (CTO)",
      image: "https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzUzOTE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Technology visionary with extensive experience in network architecture and telecom infrastructure."
    },
    {
      name: "Ibrahim Mohammed",
      position: "Chief Financial Officer (CFO)",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Financial strategist with expertise in corporate finance and business development in the telecom sector."
    },
    {
      name: "Ngozi Eze",
      position: "Chief Operations Officer (COO)",
      image: "https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzUzOTE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Operations expert focused on service delivery excellence and customer satisfaction."
    },
    {
      name: "Oluwaseun Adeyemi",
      position: "Head of Network Infrastructure",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Network engineering specialist with deep expertise in fiber optics and wireless technologies."
    },
    {
      name: "Amina Bello",
      position: "Head of Customer Experience",
      image: "https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzUzOTE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Customer service leader dedicated to ensuring exceptional support and satisfaction for all clients."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">The Management Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our leadership team brings together decades of experience in telecommunications, 
            technology, and business management to drive innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="mb-1">{member.name}</h3>
                <div className="text-blue-600 mb-3">{member.position}</div>
                <p className="text-gray-600 mb-4">{member.bio}</p>
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

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="mb-4">Join Our Team</h3>
          <p className="max-w-2xl mx-auto mb-6 text-blue-100">
            We're always looking for talented individuals who are passionate about technology 
            and committed to delivering exceptional service. Explore career opportunities with us.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}
