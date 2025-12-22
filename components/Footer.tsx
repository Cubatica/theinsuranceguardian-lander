import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-700 via-blue-800 to-blue-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4 text-lg">OptimumSeniors</h3>
          <p className="text-gray-300">Your trusted source for auto insurance quotes.</p>
        </div>
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/home" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/home#about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/home#services" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-300 hover:text-yellow-400 transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4 text-lg">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4 text-lg">Contact</h3>
          <p className="text-gray-300 mb-2">
            <strong>OptimumSeniors.com</strong>
          </p>
          <p className="text-gray-300 mb-2">
            Phone: <a href="tel:+17045551234" className="hover:text-yellow-400">(704) 555-1234</a>
          </p>
          <p className="text-gray-300">
            Email: <a href="mailto:info@optimum-seniors.com" className="hover:text-yellow-400">info@optimum-seniors.com</a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
        <p>&copy; 2025 OptimumSeniors.com. All rights reserved.</p>
        <p className="mt-2 text-xs">
          OptimumSeniors.com is an online insurance referral site. Insurance savings are not guaranteed. We match and directly connect consumers with insurance companies and agents across the US. Our site does not provide quotes directly to consumers and is not in any way affiliated with any of the insurance carriers. We do not provide insurance and we do not represent any specific insurance provider or automobile company. This website contains affiliate marketing links and phone numbers which means that the operators of this site may get paid commission on sales of the products or services advertised. OptimumSeniors.com provides access to independent auto insurance services and acts as an affiliate to these services. Your access to this website is subject to its{' '}
          <Link href="/terms" className="underline hover:text-yellow-400">
            terms of use
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}

