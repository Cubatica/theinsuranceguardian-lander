import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import RedTrackCTALink from '@/components/RedTrackCTALink';

export const metadata = {
  title: 'Commercial Van Insurance: Your Business Lifeline - The Insurance Guardian.com',
  description: 'Commercial van insurance isn\'t just a nice-to-have—it\'s your lifeline. Protect what you\'ve built with the right coverage.',
};

export default function CommercialVanInsurancePost() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="rounded-xl overflow-hidden shadow-lg mb-8">
            <img
              src="/images/blog/commercial-van-on-road.png"
              alt="Commercial delivery van on the road"
              className="w-full h-auto block"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Commercial Van Insurance: Your Business Lifeline</h1>
          <p className="text-gray-500 mb-8"><strong>Published:</strong> February 2025</p>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">Think you&apos;re smart saving on van insurance?</p>
            <p className="mb-4">Imagine a lawsuit wiping out everything you&apos;ve built.</p>
            <p className="mb-4">That&apos;s a reality when you skimp on coverage.</p>
            <p className="mb-4">Commercial van insurance isn&apos;t just a &apos;nice-to-have&apos;—it&apos;s your lifeline.</p>
            <p className="mb-4">In the world of business, unexpected twists aren&apos;t just possible; they&apos;re guaranteed.</p>
            <p className="mb-4">And when they hit, insurance isn&apos;t just a shield.</p>
            <p className="mb-8">It&apos;s your survival guide.</p>

            <p className="mb-4">This website makes comparing quotes easy.</p>
            <p className="mb-4">We streamline the process so you can protect what matters most without the hassle.</p>
            <p className="mb-8">Have you thought about the real cost of underinsuring your business? Let&apos;s chat about safeguarding your future!</p>

            <div className="bg-blue-700 text-white p-8 rounded-lg mt-12 mb-8">
              <h2 className="text-2xl font-bold mb-4">Get Your Business Covered</h2>
              <p className="mb-6">Compare commercial insurance quotes and protect what you&apos;ve built.</p>
              <RedTrackCTALink className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Visit Get Business Coverage
              </RedTrackCTALink>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-300">
              <Link href="/blog" className="text-blue-700 hover:underline mb-4 sm:mb-0">
                ← Back to Blog
              </Link>
              <Link href="/blog/truck-insurance-wont-pay" className="text-blue-700 hover:underline">
                Next: 3 Reasons Your Truck Insurance Won&apos;t Pay Out →
              </Link>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
