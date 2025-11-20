import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function FAQ() {
  const faqs = [
    {
      question: "What areas do you currently provide service coverage?",
      answer: "We provide comprehensive telecommunications services across major cities and metropolitan areas in Nigeria. Our network infrastructure includes Lagos, Abuja, Port Harcourt, Kano, and other major commercial centers. We continue to expand our coverage to reach more areas. Contact us to check if service is available in your specific location."
    },
    {
      question: "What makes your 99.9% uptime guarantee different from competitors?",
      answer: "Our 99.9% uptime guarantee is backed by a formal Service Level Agreement (SLA) with financial remedies if we fail to meet this standard. We achieve this through redundant network infrastructure, backup power systems, proactive monitoring, and a dedicated technical support team available 24/7. Our network architecture includes multiple failover paths to ensure continuous connectivity."
    },
    {
      question: "Can I start with basic services and upgrade later?",
      answer: "Absolutely! Our solutions are designed for scalability. You can start with basic broadband service and easily add voice, video conferencing, or surveillance services later without replacing your equipment. The same Customer Premises Equipment (CPE) supports multiple services, making upgrades seamless and cost-effective."
    },
    {
      question: "How quickly can you deploy services to a new location?",
      answer: "Deployment time varies based on location and service type. For areas within our existing network coverage, installation typically takes 3-5 business days after site survey approval. Our non-line-of-sight wireless technology allows for faster deployment compared to traditional infrastructure. For new areas or custom enterprise solutions, we'll provide a detailed timeline during the consultation phase."
    },
    {
      question: "What customer support options are available?",
      answer: "We provide multiple support channels for your convenience: 24/7 phone support (+234 209 703 0000), WhatsApp support (+234 701 055 3861), email support (customercare@isgresources.ng), and an online customer portal. Enterprise clients receive dedicated account managers and priority support. Our technical team is trained to resolve most issues remotely, with field engineers available when on-site support is needed."
    },
    {
      question: "Do you offer service level agreements for enterprise clients?",
      answer: "Yes, we provide comprehensive SLAs for all enterprise clients, guaranteeing 99.9% network availability. Our SLAs include defined response times, escalation procedures, and remedies for service disruptions. We can customize SLAs based on your specific business requirements, including enhanced support, faster response times, and dedicated infrastructure."
    },
    {
      question: "What is included in your colocation services?",
      answer: "Our colocation facilities include uninterrupted power supply with backup generators, advanced cooling systems, fire suppression technology, physical security with 24/7 monitoring, network connectivity options, and rack space. You can house your servers, networking equipment, or other IT infrastructure in our secure, high-availability data center environment."
    },
    {
      question: "Can you integrate with our existing phone system or CRM?",
      answer: "Yes, our voice services are designed for integration with existing systems. We support integration with popular CRM platforms, existing PBX systems, and business applications. Our technical team will work with you to ensure seamless integration and provide necessary APIs and documentation. We also offer hosted PBX solutions if you prefer a fully managed service."
    },
    {
      question: "What payment options and billing cycles do you offer?",
      answer: "We offer flexible payment options including monthly, quarterly, and annual billing cycles. Payment methods include bank transfers, online payment through our portal, mobile money, and for enterprise clients, direct debit arrangements. Annual subscriptions receive discounted rates. We also provide detailed invoicing and usage reports through our customer portal."
    },
    {
      question: "Do you provide training for the services and equipment?",
      answer: "Yes, we offer comprehensive training as part of our service portfolio. For enterprise clients, we provide on-site training for staff on using our voice systems, network equipment, and customer portal. We also offer formal IT and telecommunications training programs through our Training Portfolio, covering topics from basic network administration to advanced telecommunications technologies."
    },
    {
      question: "What happens if I experience service issues?",
      answer: "If you experience any service issues, immediately contact our support team through phone, WhatsApp, or email. Our technical team will diagnose the issue remotely and in most cases resolve it without requiring a site visit. If on-site support is needed, we dispatch field engineers based on your SLA terms. All issues are tracked through our ticketing system, and you'll receive updates until resolution."
    },
    {
      question: "Are your services suitable for small businesses or just enterprises?",
      answer: "Our services cater to businesses of all sizes, from small startups to large enterprises. We offer scalable solutions that grow with your business. Small businesses benefit from our affordable entry-level packages with the ability to add services as they grow. We provide the same quality infrastructure and support regardless of company size, ensuring every client receives professional, reliable service."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about our services, coverage, and support. 
            Can't find what you're looking for? Contact our team directly.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 bg-blue-600 text-white rounded-2xl p-8 text-center">
          <MessageCircle className="h-12 w-12 mx-auto mb-4" />
          <h3 className="mb-3">Still Have Questions?</h3>
          <p className="mb-6 text-blue-100">
            Our team is here to help. Reach out to us through any of our contact channels, 
            and we'll be happy to answer your questions.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact">Contact Support</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
