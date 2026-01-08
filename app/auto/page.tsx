'use client';

// import Script from "next/script";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function AutoLanderGG() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Set page title and meta description
  useEffect(() => {
    document.title = "Auto Insurance Quotes - The Insurance Guardian.com";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Get a FREE auto insurance quote. Compare plans and save up to 50% on your car insurance.");
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = "Get a FREE auto insurance quote. Compare plans and save up to 50% on your car insurance.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      {/* RedTrack Body Script */}
      {/* <Script
        id="redtrack-body"
        strategy="afterInteractive"
        src="https://clk.theinsuranceguardian.com/unilpclick.js?attribution=lastpaid&cookiedomain=&cookieduration=90&defaultcampaignid=6939a450b0e10db07911d34a&regviewonce=false"
      /> */}
      <div className="min-h-screen bg-white">
      {/* Background Sections */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
      </div>

      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
              <Link 
                href="/home"
                className="block flex-shrink-0"
              >
                <img
                  src="/theinsuranceguardian-logo.svg"
                  alt="The Insurance Guardian logo"
                  className="h-8 md:h-12 w-auto"
                  loading="lazy"
                />
              </Link>
              <p className="text-sm md:text-lg font-semibold text-gray-900 hidden lg:block truncate">
                Find the best savings on car insurance easily and fast
              </p>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 text-2xl p-2 flex-shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 flex-shrink-0">
              <Link href="/home#about" className="text-sm lg:text-base text-gray-700 hover:text-blue-700 font-medium transition-colors whitespace-nowrap">
                About
              </Link>
              <Link href="/home#services" className="text-sm lg:text-base text-gray-700 hover:text-blue-700 font-medium transition-colors whitespace-nowrap">
                Services
              </Link>
              <Link href="/faq" className="text-sm lg:text-base text-gray-700 hover:text-blue-700 font-medium transition-colors whitespace-nowrap">
                FAQ
              </Link>
              <Link href="/home#contact" className="text-sm lg:text-base text-gray-700 hover:text-blue-700 font-medium transition-colors whitespace-nowrap">
                Contact
              </Link>
            </nav>
            <a
             href="https://clk.theinsuranceguardian.com/click"
              target="_top"
              className="px-4 py-2 md:px-8 md:py-3 bg-[#FF6D68] text-white font-semibold rounded-full hover:bg-[#CF2169] transition-colors duration-300 text-xs md:text-base whitespace-nowrap flex-shrink-0"
            >
              START MY QUOTE
            </a>
          </div>
          {/* Mobile Menu - Dropdown */}
          <nav
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } md:hidden flex-col absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg`}
          >
            <Link 
              href="/home#about" 
              className="px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gray-50 font-medium transition-colors border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/home#services" 
              className="px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gray-50 font-medium transition-colors border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/faq" 
              className="px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gray-50 font-medium transition-colors border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/home#contact" 
              className="px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gray-50 font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pt-16 md:pt-20">
        {/* New Hero Section */}
        <section className="relative py-16 px-4 md:py-24 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://cdn.convertri.com/95e046c4-fcd2-11ea-abef-0697e5ca793e%2F0a06006012abc69ada0126f2b3f16ed5f8cf9a35%2Fimage-bg.webp)'
            }}
          ></div>
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-white/60 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex justify-start">
              {/* CTA Box Container */}
              <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 border border-gray-200 max-w-md">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://convertri.imgix.net/95e046c4-fcd2-11ea-abef-0697e5ca793e%2F0c99f8b34804ef14d5b8888894adbad1ed75e1ab%2Fwidget-auto-icon-active.svg"
                    alt="Auto insurance icon"
                    className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0"
                    loading="eager"
                  />
                  <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                    Find the best savings on car insurance easily and fast
                  </h1>
                </div>
                <a
                href="https://clk.theinsuranceguardian.com/click"
                  target="_top"
                  className="inline-block w-full text-center px-8 py-4 bg-[#FF6D68] text-white font-semibold rounded-full hover:bg-[#CF2169] transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
                >
                  START MY QUOTE
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section with Phone Image */}
        <section className="relative py-20 px-4 md:py-32 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: 'url(https://cdn.convertri.com/95e046c4-fcd2-11ea-abef-0697e5ca793e%2F0a06006012abc69ada0126f2b3f16ed5f8cf9a35%2Fimage-bg.webp)'
            }}
          ></div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/80 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Phone Image */}
              <div className="flex justify-center md:justify-start">
                <div className="block">
                  <img
                    src="https://convertri.imgix.net/95e046c4-fcd2-11ea-abef-0697e5ca793e/40070740f76dc259fed0d0d5b6730fbadf0184b1/img-phone-with-pattern.png?auto=compress,format&fit=scale&w=450&h=675"
                    alt="Phone with pattern"
                    className="w-full max-w-[450px] h-auto"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  HOW IT WORKS
                </h2>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  3 steps to compare auto insurance quotes
                </h1>

                {/* Step 1 */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    01 / Get your quote
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Fill out the form to tell us about yourself and your car coverage needs. It takes about 5 minutes. You'll get a FREE auto insurance quote from a local agency or carrier customized to your unique profile.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    02 / Compare plans
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Compare that quote with your current auto owners plan, or get a second quote and compare them. See how your new quotes stack up against what you're currently paying.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    03 / Save up to 50%
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Are you getting the best deal? If one of your new auto quotes has a better rate, you can swap plans and start saving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why The Insurance Guardian Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
              WHY THEINSURANCEGUARDIAN.COM
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">
              Why compare car quotes with The Insurance Guardian?
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="block mb-4">
                  <img
                    src="https://convertri.imgix.net/95e046c4-fcd2-11ea-abef-0697e5ca793e%2Ff1886669ba21fb0d7a20fbb029f05341a2f114df%2Ficon_pig.svg"
                    alt="Serious savings"
                    className="w-32 h-32 mx-auto"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Serious savings</h4>
                <p className="text-gray-600">
                  Call now and have an agent walk you through your quote.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="block mb-4">
                  <img
                    src="https://convertri.imgix.net/95e046c4-fcd2-11ea-abef-0697e5ca793e%2F5f66136fd816dba06ce2d8957ddb356b76a57f19%2Ficon_trusted.svg"
                    alt="Trusted by thousands"
                    className="w-32 h-32 mx-auto"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Trusted by thousands</h4>
                <p className="text-gray-600">
                  We've already helped 300,000+ people shop for auto insurance
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="block mb-4">
                  <img
                    src="https://convertri.imgix.net/95e046c4-fcd2-11ea-abef-0697e5ca793e%2Feca43e6af5f4d2a8eb00ab5999acfd58e6b24e48%2Ficon_document_quotes.svg"
                    alt="Accurate quotes"
                    className="w-32 h-32 mx-auto"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Accurate quotes</h4>
                <p className="text-gray-600">
                  Personalized quotes with real rates for your ZIP code and city
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center">
                <div className="block mb-4">
                  <img
                    src="https://convertri.imgix.net/95e046c4-fcd2-11ea-abef-0697e5ca793e%2Feb7eb831b48654442aef38e6f026f952cdfd9777%2Ficon_computer.svg"
                    alt="Quick and easy"
                    className="w-32 h-32 mx-auto"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Quick and easy</h4>
                <p className="text-gray-600">
                  Request auto quotes in 5 minutes or less. No sign-up required
                </p>
              </div>

              {/* Feature 5 */}
              <div className="text-center">
                <div className="block mb-4">
                  <img
                    src="https://convertri.imgix.net/95e046c4-fcd2-11ea-abef-0697e5ca793e%2F3bcb459127326b273844ae2eb87bf24f02503a7c%2Ficon_discount.svg"
                    alt="Custom discounts"
                    className="w-32 h-32 mx-auto"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Custom discounts</h4>
                <p className="text-gray-600">
                  Qualify for custom rates & discounts based on your profile
                </p>
              </div>

              {/* Feature 6 */}
              <div className="text-center">
                <div className="block mb-4">
                  <img
                    src="https://convertri.imgix.net/95e046c4-fcd2-11ea-abef-0697e5ca793e%2F35c0bbbedbf39ced4310b46f929f0c0a7c8a36d5%2Ficon_quote_phone.svg"
                    alt="Quote online or by phone"
                    className="w-32 h-32 mx-auto"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Quote online or by phone</h4>
                <p className="text-gray-600">
                  Quote online or call in to speak with an agent
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="https://convertri.imgix.net/95e046c4-fcd2-11ea-abef-0697e5ca793e%2F0c99f8b34804ef14d5b8888894adbad1ed75e1ab%2Fwidget-auto-icon-active.svg"
                alt="Car insurance icon"
                className="w-24 h-24 mx-auto mb-6"
                loading="lazy"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Car insurance
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Get a FREE car insurance quote
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Join the 300,000+ driver who saved money by shopping around with The Insurance Guardian!
            </p>
            <a
            href="https://clk.theinsuranceguardian.com/click"
              target="_top"
              className="inline-block px-12 py-4 bg-[#CF2169] text-white font-semibold rounded-full hover:bg-[#1F2EFF] transition-colors duration-300 text-lg shadow-lg"
            >
              Start My Quote
            </a>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="block">
              <img
                src="https://convertri.imgix.net/95e046c4-fcd2-11ea-abef-0697e5ca793e/f9204d20477c0d8e5efe047585be7814fd1193f7/star-rating-x1.png?auto=compress,format&fit=scale&w=484&h=37"
                alt="Star rating"
                className="h-9 w-auto"
                loading="lazy"
              />
            </div>
            <img
              src="https://convertri.imgix.net/95e046c4-fcd2-11ea-abef-0697e5ca793e/956bfe23843031f06ce765a792dc5f9dd9bfb165/ar-bbb-rating.png?auto=compress,format&fit=scale&w=299&h=37"
              alt="BBB rating"
              className="h-9 w-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* Footer Section */}
        <Footer />

      </main>
    </div>
    </>
  );
}

