import { Metadata } from "next";
import { Phone, Mail, MessageCircle, MapPin, Clock, Globe, Building2, Users, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact Us | Intelligent Solution Global Resources Nigeria Limited",
  description: "Get in touch with ISGRN for telecommunications solutions, infrastructure services, and business connectivity. We're here to help transform your digital future.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+234 209 703 0000",
        "+234 206 470 0000"
      ],
      description: "Call us during business hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+234 701 055 3861"],
      description: "Quick response via WhatsApp",
      link: "https://wa.me/2347010553861"
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@isgrn.com",
        "customercare@isgresources.ng"
      ],
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "1 Nepa Close, Off Gwarimpa Express Road,",
        "Kubwa Road, Abuja, FCT, Nigeria"
      ],
      description: "Visit our office"
    }
  ];

  const departments = [
    {
      icon: Headphones,
      title: "Customer Support",
      description: "General inquiries and service assistance",
      contact: "customercare@isgresources.ng"
    },
    {
      icon: Users,
      title: "Sales & Business Development",
      description: "New business opportunities and partnerships",
      contact: "info@isgrn.com"
    },
    {
      icon: Building2,
      title: "Technical Support",
      description: "Technical issues and infrastructure support",
      contact: "info@isgrn.com"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your connectivity? Contact us today to learn more about our services
              and how we can help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Contact Information</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Reach out through any of our contact channels. Our team is ready to assist you with
              all your telecommunications needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow pb-8">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                      <method.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="mb-2">{method.title}</h4>
                    <p className="text-gray-500 text-sm mb-3">{method.description}</p>
                    <div className="space-y-1">
                      {method.details.map((detail, idx) => (
                        method.link ? (
                          <a
                            key={idx}
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-blue-600 hover:text-blue-700 font-medium"
                          >
                            {detail}
                          </a>
                        ) : method.title === "Email" ? (
                          <a
                            key={idx}
                            href={`mailto:${detail}`}
                            className="block text-blue-600 hover:text-blue-700 font-medium"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={idx} className="text-gray-700 font-medium">
                            {detail}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Departments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow pb-8">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <dept.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{dept.title}</CardTitle>
                  </div>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${dept.contact}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    {dept.contact}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="mb-4">Send Us a Message</h3>
                <p className="text-gray-600 mb-6">
                  Fill out the form and our team will get back to you within 24 hours during business days.
                </p>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <h5 className="mb-2">Business Hours</h5>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600 text-sm">
                        Saturday: 9:00 AM - 2:00 PM
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Globe className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <h5 className="mb-2">Website</h5>
                      <a
                        href="https://www.isgrn.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm"
                      >
                        www.isgrn.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-linear-to-br from-blue-600 to-blue-800 text-white border-0">
                <CardContent className="pt-6">
                  <h5 className="mb-2 text-white">Company Details</h5>
                  <p className="text-blue-100 text-sm">
                    <strong>Registration:</strong> RC 700993
                    <br />
                    <strong>NCC License:</strong> CL/S&I/607/07
                    <br />
                    <strong>Established:</strong> 2007
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block mb-2 text-gray-700 font-medium">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block mb-2 text-gray-700 font-medium">
                          Last Name <span className="text-red-500">*</span>
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
                        <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">
                          Phone Number <span className="text-red-500">*</span>
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
                      <label htmlFor="company" className="block mb-2 text-gray-700 font-medium">
                        Company/Organization
                      </label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block mb-2 text-gray-700 font-medium">
                        Service of Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        required
                      >
                        <option value="">Select a service...</option>
                        <option value="call-center">Call Center Solutions</option>
                        <option value="voip">VoIP Services</option>
                        <option value="data">Data Services</option>
                        <option value="fiber">Fiber Optic Services</option>
                        <option value="bulk-sms">Bulk SMS Services</option>
                        <option value="data-center">Data Centers</option>
                        <option value="broadband">Broadband Multi-Service Network</option>
                        <option value="colocation">Colocation Services</option>
                        <option value="metro">Metro Connectivity</option>
                        <option value="voice">Voice Services</option>
                        <option value="devices">Devices & Equipment</option>
                        <option value="training">Training Portfolio</option>
                        <option value="wholesale">IP Wholesale & Backhaul</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block mb-2 text-gray-700 font-medium">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements, project details, or any questions you have..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600 text-sm">
                        By submitting this form, you agree to our privacy policy and terms of service.
                        We will only use your information to respond to your inquiry.
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>

                    <p className="text-gray-500 text-center text-sm">
                      We typically respond within 24 hours during business days.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose ISGRN?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Partnering with us means working with a trusted telecommunications leader
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center pb-8">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">18+</span>
                </div>
                <h4 className="mb-2">Years Experience</h4>
                <p className="text-gray-600 text-sm">
                  Serving Nigeria since 2007
                </p>
              </CardContent>
            </Card>

            <Card className="text-center pb-8">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">100+</span>
                </div>
                <h4 className="mb-2">Professional Team</h4>
                <p className="text-gray-600 text-sm">
                  Expert staff across all departments
                </p>
              </CardContent>
            </Card>

            <Card className="text-center pb-8">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">24/7</span>
                </div>
                <h4 className="mb-2">Support Available</h4>
                <p className="text-gray-600 text-sm">
                  Technical assistance when you need it
                </p>
              </CardContent>
            </Card>

            <Card className="text-center pb-8">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">NCC</span>
                </div>
                <h4 className="mb-2">Licensed Provider</h4>
                <p className="text-gray-600 text-sm">
                  Fully authorized and compliant
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Visit Our Office</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Abuja, Federal Capital Territory
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-4">Head Office Location</h3>
                  <p className="text-gray-700 mb-2 font-medium">
                    Intelligent Solution Global Resources Nigeria Limited
                  </p>
                  <p className="text-gray-600 mb-4">
                    1 Nepa Close, Off Gwarimpa Express Road<br />
                    Kubwa Road, Abuja<br />
                    Federal Capital Territory (FCT)<br />
                    Nigeria
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <strong>Landmark:</strong> Near Gwarimpa Express Road
                    </p>
                    <p className="text-gray-600">
                      <strong>Area:</strong> Kubwa, Abuja
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-linear-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust ISGRN for their telecommunications needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Our Services
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
