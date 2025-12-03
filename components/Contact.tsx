import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+234 209 703 0000",
        "+234 206 470 0000"
      ]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+234 701 055 3861"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["customercare@isgresources.ng"]
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Nigeria"]
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ready to transform your connectivity? Contact us today to learn more about our services 
            and how we can help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Reach out through any of our contact channels. Our team is ready to assist you.
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <method.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="mb-1">{method.title}</div>
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <div className="mb-1">Business Hours</div>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-gray-700">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-gray-700">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-gray-700">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+234 XXX XXX XXXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block mb-2 text-gray-700">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="broadband">Broadband Multi-Service Network</option>
                      <option value="colocation">Colocation Services</option>
                      <option value="metro">Metro Connectivity</option>
                      <option value="voice">Voice Services</option>
                      <option value="devices">Devices & Equipment</option>
                      <option value="training">Training Portfolio</option>
                      <option value="wholesale">IP Wholesale & Backhaul</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-gray-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-gray-500 text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
