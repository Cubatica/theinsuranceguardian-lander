import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - Auto Insurance Tips & Guides - The Insurance Guardian.com',
  description: 'Helpful articles and tips about auto insurance',
};

export default function BlogPage() {
  const blogPosts = [
    {
      slug: 'top-5-tips-choosing-auto-insurance',
      title: 'Top 5 Tips for Choosing the Right Auto Insurance',
      excerpt: 'Learn essential tips to help you choose the right auto insurance coverage for your needs.',
      date: 'December 2025',
    },
    {
      slug: 'how-to-save-auto-insurance',
      title: 'How to Save on Auto Insurance',
      excerpt: 'Practical tips to help you save money on auto insurance while maintaining the coverage you need.',
      date: 'December 2025',
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Auto Insurance Blog</h1>
          <p className="text-lg text-gray-600 mb-12">Helpful tips and guides to help you make informed insurance decisions.</p>
          
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-700 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-700 font-semibold hover:underline inline-flex items-center"
                >
                  Read More →
                </Link>
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

