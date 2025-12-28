export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <p className="text-sm text-gray-600 mb-6">
              Last Updated: December 28, 2025
            </p>
            <p>
              At Coding Gurus, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Company or organization details</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Respond to your inquiries and provide consultation services
              </li>
              <li>Deliver our services and fulfill project requirements</li>
              <li>
                Communicate with you about projects, updates, and services
              </li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Information Sharing
            </h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your explicit consent</li>
              <li>
                With service providers who assist in our operations (under
                strict confidentiality)
              </li>
              <li>When required by law or to protect our legal rights</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Cookies and Tracking
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience and analyze site traffic. You can
              control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Children's Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes by posting the new policy on
              this page with an updated "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="mb-2">
                <strong>Coding Gurus</strong>
              </p>
              <p className="mb-2">Email: contact@codinggurus.in</p>
              <p>Phone: +91 99999 99999</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Privacy Policy | Coding Gurus",
  description:
    "Learn how Coding Gurus collects, uses, and protects your personal information.",
};
