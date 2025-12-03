import { Phone, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Broadband Network", href: "#services" },
    { label: "Colocation Services", href: "#services" },
    { label: "Metro Connectivity", href: "#services" },
    { label: "Voice Services", href: "#services" },
    { label: "Training", href: "#services" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="w-48 h-auto filter brightness-200 invert">
                <Logo variant="full" size="lg" />
              </div>
            </div>
            <p className="mb-4 text-gray-400">
              Nigeria's premier telecommunications and infrastructure solutions provider. 
              Delivering reliable, scalable, and cost-effective services across the nation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">NCC Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">100% Nigerian-Owned</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-gray-400">Phone</div>
                <div className="text-white">+234 209 703 0000</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-gray-400">Email</div>
                <div className="text-white">customercare@isgresources.ng</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-gray-400">WhatsApp</div>
                <div className="text-white">+234 701 055 3861</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {currentYear} Intelligent Solutions Global Resources Nigeria. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Shield({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function Award({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}