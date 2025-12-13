import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ISGRN",
  description: "Terms of Service for Intelligent Solutions Global Resources Nigeria Limited",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: December 13, 2025</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer",
              "you", or "your") and Intelligent Solutions Global Resources Nigeria Limited ("ISGRN", "we",
              "us", or "our"), a company registered with the Corporate Affairs Commission (CAC) under
              registration number RC 700993 and licensed by the Nigerian Communications Commission (NCC)
              under code CL/S&I/607/07.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By accessing or using our telecommunications services, website, or any related services, you
              agree to be bound by these Terms. If you do not agree to these Terms, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Offered</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              ISGRN provides the following telecommunications and technology services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Call Center Solutions:</strong> Inbound and outbound call center services, customer
              support, telemarketing, and automated response systems</li>
              <li><strong>VoIP Services:</strong> Voice over Internet Protocol solutions, video conferencing,
              and unified communications platforms</li>
              <li><strong>Data Services:</strong> High-speed internet connectivity, broadband, and mobile
              data plans</li>
              <li><strong>Fiber Optic Services:</strong> Deployment and maintenance of fiber optic networks
              for ultra-fast internet connectivity</li>
              <li><strong>Bulk SMS Services:</strong> Scalable messaging platforms for promotional, transactional,
              and alert communications</li>
              <li><strong>Data Centers:</strong> Colocation, cloud hosting, disaster recovery, and managed
              services with secure facilities</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Service availability, specifications, and pricing are subject to change. We reserve the right
              to modify, suspend, or discontinue any service at any time with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Registration and Use</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed">
              To access certain services, you must create an account by providing accurate, current, and
              complete information. You are responsible for maintaining the confidentiality of your account
              credentials and for all activities that occur under your account.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.2 Acceptable Use</h3>
            <p className="text-gray-700 leading-relaxed mb-2">You agree not to use our services to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Violate any applicable laws, regulations, or NCC guidelines</li>
              <li>Transmit harmful, offensive, or illegal content</li>
              <li>Engage in fraudulent activities or impersonate others</li>
              <li>Interfere with network security or attempt unauthorized access</li>
              <li>Send unsolicited commercial communications (spam)</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Engage in activities that could damage ISGRN's reputation or infrastructure</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.3 Account Suspension</h3>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your account immediately if you violate these
              Terms, engage in prohibited activities, or if required by law enforcement or regulatory authorities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment and Billing</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.1 Fees and Charges</h3>
            <p className="text-gray-700 leading-relaxed">
              You agree to pay all fees associated with the services you subscribe to. Fees are stated in
              Nigerian Naira (NGN) unless otherwise specified. Prices are subject to change with 30 days'
              written notice.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.2 Payment Terms</h3>
            <p className="text-gray-700 leading-relaxed">
              Payment is due according to the billing cycle specified in your service agreement. Late
              payments may result in service suspension and additional charges. We accept payment via bank
              transfer, online payment platforms, and other approved methods.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.3 Refunds</h3>
            <p className="text-gray-700 leading-relaxed">
              Refund requests are evaluated on a case-by-case basis. Generally, fees paid for services
              already rendered are non-refundable. For disputes, please contact our customer support team
              at info@isgrn.com.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.4 Taxes</h3>
            <p className="text-gray-700 leading-relaxed">
              All fees are exclusive of applicable taxes (VAT, withholding tax, etc.) unless stated otherwise.
              You are responsible for all taxes associated with your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Service Level and Support</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">5.1 Service Availability</h3>
            <p className="text-gray-700 leading-relaxed">
              While we strive for maximum uptime, we do not guarantee uninterrupted service. Scheduled
              maintenance, network upgrades, or unforeseen technical issues may cause temporary service
              disruptions. We will provide advance notice of scheduled maintenance when possible.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">5.2 Customer Support</h3>
            <p className="text-gray-700 leading-relaxed">
              We provide customer support via email at info@isgrn.com. Support hours and response times
              vary by service tier. Enterprise customers may have dedicated account managers and priority support.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">5.3 Service Level Agreements (SLAs)</h3>
            <p className="text-gray-700 leading-relaxed">
              Specific SLAs, including uptime guarantees and performance metrics, are defined in individual
              service contracts. Enterprise and business customers may negotiate custom SLAs based on their
              requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">6.1 ISGRN's Intellectual Property</h3>
            <p className="text-gray-700 leading-relaxed">
              All content, trademarks, service marks, logos, and intellectual property associated with ISGRN's
              services are owned by ISGRN or its licensors. You may not reproduce, distribute, or create
              derivative works without our express written permission.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">6.2 Customer Data</h3>
            <p className="text-gray-700 leading-relaxed">
              You retain all rights to data, content, and materials you upload or transmit through our services.
              By using our services, you grant ISGRN a limited license to process, store, and transmit your
              data solely for the purpose of providing services to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              Our collection, use, and protection of your personal information are governed by our Privacy
              Policy, which is incorporated into these Terms by reference. We comply with the Nigeria Data
              Protection Regulation (NDPR) 2019 and NCC regulations regarding customer data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by Nigerian law:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>ISGRN shall not be liable for indirect, incidental, special, consequential, or punitive
              damages arising from your use of our services</li>
              <li>Our total liability for any claim shall not exceed the amount you paid for the service
              in the 12 months preceding the claim</li>
              <li>We are not responsible for losses caused by factors beyond our reasonable control, including
              force majeure events, third-party actions, or customer misuse of services</li>
              <li>We do not guarantee that our services will meet your specific requirements or be error-free</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless ISGRN, its directors, officers, employees,
              and agents from any claims, damages, losses, liabilities, and expenses (including legal fees)
              arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Term and Termination</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">10.1 Term</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms remain in effect for as long as you use our services. Service-specific agreements
              may have defined contract periods with renewal terms.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">10.2 Termination by Customer</h3>
            <p className="text-gray-700 leading-relaxed">
              You may terminate your service by providing written notice according to your service agreement.
              Early termination fees may apply for contracted services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">10.3 Termination by ISGRN</h3>
            <p className="text-gray-700 leading-relaxed">
              We may terminate your service immediately for cause (breach of Terms, non-payment, illegal
              activity) or with 30 days' notice without cause. Upon termination, you must pay all outstanding fees.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">10.4 Effect of Termination</h3>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use the services ceases immediately. We may delete your data
              after a reasonable retention period unless required by law to retain it longer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">11.1 Informal Resolution</h3>
            <p className="text-gray-700 leading-relaxed">
              In the event of any dispute, you agree to first contact us at info@isgrn.com to seek an informal
              resolution. We commit to working in good faith to resolve disputes amicably.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">11.2 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be
              subject to the exclusive jurisdiction of the courts in Abuja, Federal Capital Territory, Nigeria.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">11.3 Arbitration</h3>
            <p className="text-gray-700 leading-relaxed">
              For commercial disputes exceeding NGN 5,000,000, parties may agree to binding arbitration under
              the Nigerian Arbitration and Conciliation Act. The arbitration shall be conducted in Abuja, Nigeria.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Regulatory Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              As a licensed telecommunications provider, ISGRN operates in compliance with NCC regulations,
              NDPR requirements, and other applicable Nigerian laws. Customers must also comply with all
              relevant regulations when using our services. We reserve the right to cooperate with law
              enforcement and regulatory authorities as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed">
              ISGRN shall not be liable for any failure or delay in performance due to circumstances beyond
              our reasonable control, including but not limited to acts of God, natural disasters, war,
              terrorism, strikes, government actions, power outages, or telecommunications failures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Modifications to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Material changes will be communicated
              via email or through prominent notice on our website at least 30 days before taking effect.
              Your continued use of our services after changes become effective constitutes acceptance of
              the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall
              be limited or eliminated to the minimum extent necessary, and the remaining provisions shall
              remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy and any service-specific agreements, constitute
              the entire agreement between you and ISGRN regarding the use of our services and supersede all
              prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions, concerns, or notices regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Intelligent Solutions Global Resources Nigeria Limited</strong></p>
              <p className="text-gray-700 mt-2">1 Nepa Close, Off Gwarimpa Express Road</p>
              <p className="text-gray-700">Kubwa Road, Abuja, FCT, Nigeria</p>
              <p className="text-gray-700 mt-2"><strong>Email:</strong> info@isgrn.com</p>
              <p className="text-gray-700 mt-2"><strong>NCC License Number:</strong> CL/S&I/607/07</p>
              <p className="text-gray-700"><strong>CAC Registration Number:</strong> RC 700993</p>
              <p className="text-gray-700 mt-2"><strong>Company Type:</strong> Private Unlimited Company</p>
              <p className="text-gray-700"><strong>Date of Incorporation:</strong> July 26, 2007</p>
            </div>
          </section>

          <section className="border-t pt-6">
            <p className="text-sm text-gray-600 italic">
              By using ISGRN's services, you acknowledge that you have read, understood, and agree to be
              bound by these Terms of Service. These Terms are legally binding and enforceable under Nigerian law.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
