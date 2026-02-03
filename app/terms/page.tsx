import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions - The Insurance Guardian.com',
  description: 'Terms and Conditions for The Insurance Guardian.com - Read our terms of service and usage policies.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Terms & Conditions</h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: December 2025</p>

          <div className="prose prose-lg max-w-none bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using The Insurance Guardian.com ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                The Insurance Guardian.com is an online insurance referral service. We match and directly connect consumers with insurance companies and agents across the United States. Our website does not provide insurance quotes directly to consumers and is not affiliated with any specific insurance carrier. We do not provide insurance and we do not represent any specific insurance provider or automobile company.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Affiliate Disclosure</h2>
              <p className="text-gray-600 mb-4">
                This website contains affiliate marketing links and phone numbers, which means that the operators of this site may receive commission on sales of the products or services advertised. The Insurance Guardian.com provides access to independent commercial insurance services and acts as an affiliate to these services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. No Guarantee of Savings</h2>
              <p className="text-gray-600 mb-4">
                Insurance savings are not guaranteed. The quotes and rates provided through our service are estimates and may vary based on individual circumstances, coverage needs, and insurance provider policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information when using our services</li>
                <li>Use the website only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to any portion of the website</li>
                <li>Not interfere with or disrupt the website or servers</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property of The Insurance Guardian.com or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                The Insurance Guardian.com shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website. We are not responsible for the accuracy, completeness, or reliability of any information provided by third-party insurance providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-gray-600 mb-4">
                The website is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                Our website may contain links to third-party websites and services. We are not responsible for the content, privacy policies, or practices of any third-party sites. Your interactions with third-party services are solely between you and the third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Indemnification</h2>
              <p className="text-gray-600 mb-4">
                You agree to indemnify and hold harmless The Insurance Guardian.com, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of the website or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Modifications to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on this page and updating the "Last updated" date. Your continued use of the website after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Termination</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to terminate or suspend your access to the website at any time, without prior notice, for any reason, including breach of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These terms shall be governed by and construed in accordance with the laws of the state of North Carolina, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">14. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>The Insurance Guardian.com</strong></p>
                <p className="text-gray-700">Phone: <a href="tel:+17045551234" className="text-blue-700 hover:underline">(704) 555-1234</a></p>
                <p className="text-gray-700">Email: <a href="mailto:info@theinsuranceguardian.com" className="text-blue-700 hover:underline">info@theinsuranceguardian.com</a></p>
              </div>
            </section>
          </div>

          <div className="mt-8">
            <Link href="/home" className="text-blue-700 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

