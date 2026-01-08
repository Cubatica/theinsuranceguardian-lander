import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';

export const metadata = {
  title: 'FAQ - Frequently Asked Questions - The Insurance Guardian.com',
  description: 'Frequently Asked Questions about auto insurance - The Insurance Guardian.com',
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 mb-12">Find answers to common questions about auto insurance.</p>
          
          <FAQAccordion />

          <div className="mt-16 p-8 bg-blue-50 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Get in touch with us.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17045551234"
                className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Call (704) 555-1234
              </a>
              <a
                href="mailto:info@theinsuranceguardian.com"
                className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-50 transition-colors"
              >
                Email Us
              </a>
            </div>
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

