import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ISGRN",
  description: "Privacy Policy for Intelligent Solutions Global Resources Nigeria Limited",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: December 13, 2025</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Intelligent Solutions Global Resources Nigeria Limited ("ISGRN", "we", "us", or "our")
              is committed to protecting your privacy and ensuring the security of your personal information.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you use our telecommunications services, visit our website, or interact with us.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By using our services, you agree to the collection and use of information in accordance with
              this policy. We comply with the Nigeria Data Protection Regulation (NDPR) 2019 and all
              applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-2">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Contact information (name, email address, phone number, mailing address)</li>
              <li>Business information (company name, job title, industry)</li>
              <li>Account credentials (username, password)</li>
              <li>Payment information (billing address, payment method details)</li>
              <li>Communication records (call logs, SMS records, customer support interactions)</li>
              <li>Technical data (IP address, browser type, device information, usage data)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.2 Service Usage Information</h3>
            <p className="text-gray-700 leading-relaxed">
              When you use our services (VoIP, data services, bulk SMS, call center solutions, fiber optic,
              or data center services), we collect information about your usage patterns, service preferences,
              and performance metrics to optimize service delivery and improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-2">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Providing and maintaining our telecommunications services</li>
              <li>Processing transactions and managing billing</li>
              <li>Communicating with you about services, updates, and promotional offers</li>
              <li>Responding to customer support requests and inquiries</li>
              <li>Improving our services and developing new features</li>
              <li>Ensuring network security and preventing fraud</li>
              <li>Complying with legal obligations and regulatory requirements</li>
              <li>Conducting analytics to understand usage patterns and optimize performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.1 Third-Party Service Providers</h3>
            <p className="text-gray-700 leading-relaxed">
              We may share your information with trusted third-party service providers who assist us in
              operating our business, such as payment processors, cloud hosting providers, and technical
              support partners. These parties are contractually obligated to maintain confidentiality and
              use your information only for authorized purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.2 Legal Requirements</h3>
            <p className="text-gray-700 leading-relaxed">
              We may disclose your information if required by law, court order, or in response to valid
              requests by public authorities, including to meet national security or law enforcement requirements,
              in compliance with the Nigerian Communications Commission (NCC) regulations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.3 Business Transfers</h3>
            <p className="text-gray-700 leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred
              to the acquiring entity, subject to the same privacy protections outlined in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your personal information from
              unauthorized access, alteration, disclosure, or destruction. Our security practices include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure data center facilities with physical and logical access controls</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection and confidentiality</li>
              <li>Multi-factor authentication for system access</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              While we strive to protect your information, no method of transmission over the Internet or
              electronic storage is 100% secure. We cannot guarantee absolute security but remain committed
              to implementing best practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Data Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Under the Nigeria Data Protection Regulation (NDPR), you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Right to Access:</strong> Request copies of your personal information</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal information</li>
              <li><strong>Right to Object:</strong> Object to processing of your personal information</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data to another provider</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us at info@isgrn.com. We will respond to your request
              within 30 days as required by NDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined
              in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              When data is no longer required, we securely delete or anonymize it in accordance with our data
              retention policies and applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website uses cookies and similar tracking technologies to enhance user experience, analyze
              site traffic, and personalize content. You can control cookie preferences through your browser
              settings. Disabling cookies may affect the functionality of certain website features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website and services may contain links to third-party websites or services. We are not
              responsible for the privacy practices of these external sites. We encourage you to review the
              privacy policies of any third-party services you access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children. If you become aware that a child has provided us with
              personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or
              legal requirements. We will notify you of any material changes by posting the updated policy
              on our website with a revised "Last Updated" date. Your continued use of our services after
              such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Intelligent Solutions Global Resources Nigeria Limited</strong></p>
              <p className="text-gray-700 mt-2">1 Nepa Close, Off Gwarimpa Express Road</p>
              <p className="text-gray-700">Kubwa Road, Abuja, FCT, Nigeria</p>
              <p className="text-gray-700 mt-2"><strong>Email:</strong> info@isgrn.com</p>
              <p className="text-gray-700 mt-2"><strong>NCC License:</strong> CL/S&I/607/07</p>
              <p className="text-gray-700"><strong>CAC Registration:</strong> RC 700993</p>
            </div>
          </section>

          <section className="border-t pt-6">
            <p className="text-sm text-gray-600 italic">
              This Privacy Policy is governed by the laws of the Federal Republic of Nigeria and complies
              with the Nigeria Data Protection Regulation (NDPR) 2019 and regulations of the Nigerian
              Communications Commission (NCC).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
