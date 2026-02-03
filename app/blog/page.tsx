import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - Commercial Insurance Tips & Guides - The Insurance Guardian.com',
  description: 'Helpful articles and tips about commercial and business insurance',
};

export default function BlogPage() {
  const blogPosts = [
    {
      slug: 'commercial-van-insurance',
      title: 'Commercial Van Insurance: Your Business Lifeline',
      excerpt: 'Commercial van insurance isn\'t just a nice-to-have—it\'s your lifeline. Protect what you\'ve built.',
      date: 'February 2025',
      image: '/images/blog/commercial-van-on-road.png',
      imageAlt: 'Commercial delivery van on the road',
    },
    {
      slug: 'truck-insurance-wont-pay',
      title: '3 Reasons Your Truck Insurance Won\'t Pay Out When You Need It Most',
      excerpt: 'Why your truck coverage might leave you exposed—and how to fix it.',
      date: 'February 2025',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
      imageAlt: 'Commercial truck on highway',
    },
    {
      slug: 'contractor-insurance-complete',
      title: 'Think Your Contractor Insurance Is Complete? Think Again.',
      excerpt: 'Many contractor policies are full of holes. Here\'s how to close the gaps.',
      date: 'February 2025',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
      imageAlt: 'Contractor at work on construction site',
    },
    {
      slug: 'landscapers-hidden-risks',
      title: '3 Hidden Risks Landscapers Face That Your Insurance Won\'t Cover',
      excerpt: 'Riding mowers, subcontractors, and underinsured equipment—what you need to know.',
      date: 'February 2025',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
      imageAlt: 'Landscaper mowing lawn with riding mower',
    },
    {
      slug: 'barbershop-insurance',
      title: 'Barbershop Insurance: Precision Coverage for Your Business',
      excerpt: 'That one cut you might be overlooking? It\'s in your insurance policy.',
      date: 'February 2025',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80',
      imageAlt: 'Barber cutting hair in barbershop',
    },
    {
      slug: 'plumbers-insurance',
      title: 'When Plumbing Work Turns Into a Lawsuit: Protect Your Business',
      excerpt: 'A single mishap can cost thousands. Get the right coverage before it\'s too late.',
      date: 'February 2025',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80',
      imageAlt: 'Plumber working on pipes',
    },
    {
      slug: 'electrician-fleet-insurance',
      title: 'Jake\'s Electric Works: Why Fleet and Tool Coverage Matters',
      excerpt: 'Coverage gaps can drain your revenue. Here\'s how one electrician learned the hard way.',
      date: 'February 2025',
      image: '/images/blog/electrician.png',
      imageAlt: 'Electrician with fleet vans',
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Commercial Insurance Blog</h1>
          <p className="text-lg text-gray-600 mb-12">Helpful tips and guides for business owners to make informed insurance decisions.</p>
          
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col sm:flex-row"
              >
                <Link href={`/blog/${post.slug}`} className="block sm:w-36 sm:flex-shrink-0">
                  <div className="aspect-square w-full sm:w-36 sm:h-36 bg-gray-200 overflow-hidden rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="p-6 sm:p-8 flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-700 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-700 font-semibold hover:underline inline-flex items-center"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
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

