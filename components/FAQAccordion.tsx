'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: 'General Questions',
    items: [
      {
        question: 'What is auto insurance and why do I need it?',
        answer: 'Auto insurance is a contract between you and an insurance company that protects you against financial loss in the event of an accident or theft. In most states, auto insurance is required by law. It helps cover costs for vehicle repairs, medical expenses, and liability if you\'re at fault in an accident. Without insurance, you could face significant financial penalties, license suspension, and personal liability for damages.',
      },
      {
        question: 'What are the minimum auto insurance requirements?',
        answer: (
          <>
            <p className="mb-2">Auto insurance requirements vary by state. Most states require drivers to carry minimum liability coverage. Common minimum requirements include:</p>
            <ul className="list-disc list-inside mb-2 space-y-1">
              <li><strong>Bodily Injury Liability:</strong> Typically $25,000-$30,000 per person / $50,000-$60,000 per accident</li>
              <li><strong>Property Damage Liability:</strong> Usually $15,000-$25,000 per accident</li>
              <li><strong>Uninsured Motorist Coverage:</strong> Required in some states, typically matching liability limits</li>
            </ul>
            <p>Check your state's specific requirements, as they vary. While these are the minimums, many drivers choose higher coverage limits for better protection.</p>
          </>
        ),
      },
      {
        question: 'How do I get a free quote?',
        answer: 'Getting a free quote is easy! Contact us by phone at (704) 555-1234 or email at info@theinsuranceguardian.com. We\'ll connect you with insurance providers who can offer you competitive quotes based on your information. The process takes just a few minutes, and there\'s no obligation to purchase.',
      },
      {
        question: 'How long does it take to get a quote?',
        answer: 'After contacting us, you can typically receive quotes within minutes to a few hours, depending on the insurance providers. Some companies offer instant online quotes, while others may need to review your information and contact you directly. We\'ll connect you with providers as quickly as possible.',
      },
    ],
  },
  {
    title: 'Coverage & Policies',
    items: [
      {
        question: 'What\'s the difference between liability, collision, and comprehensive coverage?',
        answer: (
          <>
            <p className="mb-2"><strong>Liability Coverage:</strong> Covers damages and injuries you cause to others in an accident. This is required by law in most states.</p>
            <p className="mb-2"><strong>Collision Coverage:</strong> Covers damage to your own vehicle from a collision, regardless of who\'s at fault. This is optional but recommended for newer or valuable vehicles.</p>
            <p><strong>Comprehensive Coverage:</strong> Covers damage to your vehicle from non-collision events like theft, vandalism, fire, weather, or hitting an animal. This is also optional but provides broader protection.</p>
          </>
        ),
      },
      {
        question: 'Should I get full coverage or just liability?',
        answer: (
          <>
            <p className="mb-2">The right choice depends on your situation:</p>
            <ul className="list-disc list-inside mb-2 space-y-1">
              <li><strong>Full Coverage:</strong> Recommended if you have a newer vehicle, are financing or leasing, or want maximum protection. It includes liability, collision, and comprehensive coverage.</li>
              <li><strong>Liability Only:</strong> May be sufficient if you have an older vehicle with low value, own it outright, and can afford to replace it if totaled. However, you\'ll have no protection for damage to your own vehicle.</li>
            </ul>
            <p>Consider your vehicle\'s value, your financial situation, and your risk tolerance when making this decision.</p>
          </>
        ),
      },
      {
        question: 'What is a deductible and how does it work?',
        answer: 'A deductible is the amount you pay out of pocket before your insurance coverage kicks in. For example, if you have a $500 deductible and file a claim for $2,000 in damages, you pay $500 and your insurance covers the remaining $1,500. Higher deductibles typically mean lower monthly premiums, but you\'ll pay more if you need to file a claim. Choose a deductible you can comfortably afford in case of an accident.',
      },
      {
        question: 'What factors affect my insurance rates?',
        answer: (
          <>
            <p className="mb-2">Several factors influence your auto insurance premiums:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Driving Record:</strong> Accidents, tickets, and violations increase rates</li>
              <li><strong>Age & Experience:</strong> Younger and less experienced drivers typically pay more</li>
              <li><strong>Location:</strong> Urban areas may have higher rates due to traffic and theft risk</li>
              <li><strong>Vehicle Type:</strong> Sports cars, luxury vehicles, and high-theft models cost more to insure</li>
              <li><strong>Credit Score:</strong> In many states, insurers can use credit scores to determine rates</li>
              <li><strong>Coverage Level:</strong> Higher limits and additional coverage increase premiums</li>
              <li><strong>Mileage:</strong> More annual miles driven can increase rates</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    title: 'Saving Money',
    items: [
      {
        question: 'How can I lower my auto insurance premiums?',
        answer: (
          <>
            <p className="mb-2">There are several ways to reduce your insurance costs:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Maintain a clean driving record</li>
              <li>Take advantage of discounts (safe driver, multi-policy, good student, etc.)</li>
              <li>Increase your deductible (if you can afford it)</li>
              <li>Improve your credit score</li>
              <li>Drive less or use usage-based insurance</li>
              <li>Choose a vehicle that\'s cheaper to insure</li>
              <li>Bundle multiple policies with the same insurer</li>
              <li>Complete defensive driving courses</li>
              <li>Review and adjust coverage as your vehicle ages</li>
            </ul>
          </>
        ),
      },
      {
        question: 'What discounts are available?',
        answer: (
          <>
            <p className="mb-2">Common auto insurance discounts include:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Safe Driver:</strong> For drivers with no accidents or violations</li>
              <li><strong>Multi-Vehicle:</strong> Insuring multiple cars with the same company</li>
              <li><strong>Multi-Policy/Bundling:</strong> Combining auto with home or renters insurance</li>
              <li><strong>Good Student:</strong> Students with B average or better</li>
              <li><strong>Defensive Driving Course:</strong> Completing an approved course</li>
              <li><strong>Low Mileage:</strong> Driving fewer miles than average</li>
              <li><strong>Vehicle Safety Features:</strong> Anti-theft devices, airbags, anti-lock brakes</li>
            </ul>
            <p className="mt-2">Ask your insurance provider about all available discounts.</p>
          </>
        ),
      },
    ],
  },
  {
    title: 'Claims & Accidents',
    items: [
      {
        question: 'What should I do if I\'m in an accident?',
        answer: (
          <>
            <p className="mb-2">If you\'re involved in an accident:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li><strong>Stay Calm:</strong> Check for injuries and call 911 if anyone is hurt</li>
              <li><strong>Move to Safety:</strong> If possible, move vehicles out of traffic</li>
              <li><strong>Call Police:</strong> Report the accident, especially if there are injuries or significant damage</li>
              <li><strong>Document Everything:</strong> Take photos, get witness information, exchange contact and insurance details</li>
              <li><strong>Contact Your Insurance:</strong> Report the accident to your insurance company as soon as possible</li>
              <li><strong>Don\'t Admit Fault:</strong> Let insurance companies determine liability</li>
              <li><strong>Keep Records:</strong> Save all documents, photos, and correspondence</li>
            </ol>
          </>
        ),
      },
      {
        question: 'How long do I have to file a claim?',
        answer: 'It\'s best to file a claim as soon as possible after an accident. Most insurance companies prefer to be notified within 24-48 hours, though policies typically allow longer periods. Delaying a claim can complicate the process and potentially affect coverage. Check your specific policy for exact timeframes, and when in doubt, contact your insurer immediately.',
      },
      {
        question: 'Will my rates increase after filing a claim?',
        answer: 'Filing a claim may increase your rates, especially if you\'re at fault. However, several factors determine rate changes: whether you were at fault, the severity and cost of the claim, your previous claims history, and your insurance company\'s policies. Some companies offer accident forgiveness programs that protect your rates after your first accident. Not-at-fault accidents typically have less impact on rates.',
      },
    ],
  },
  {
    title: 'About The Insurance Guardian',
    items: [
      {
        question: 'Is The Insurance Guardian.com an insurance company?',
        answer: 'No, The Insurance Guardian.com is not an insurance company. We are an online insurance referral site. We match and directly connect consumers with insurance companies and agents across the US. Our site does not provide quotes directly to consumers and is not in any way affiliated with any of the insurance carriers. We do not provide insurance and we do not represent any specific insurance provider or automobile company.',
      },
      {
        question: 'Is there a fee to use The Insurance Guardian.com?',
        answer: 'No, our referral service is free for users. There are no fees to use our platform. This website contains affiliate marketing links and phone numbers which means that the operators of this site may get paid commission on sales of the products or services advertised. The Insurance Guardian.com provides access to independent auto insurance services and acts as an affiliate to these services. This does not affect the quotes you receive or the rates you\'re offered.',
      },
      {
        question: 'How do I contact The Insurance Guardian.com?',
        answer: 'You can reach us by email at info@theinsuranceguardian.com or by phone at (704) 555-1234. We\'re here to help you find the right auto insurance coverage. If you have questions about quotes, coverage options, or our services, don\'t hesitate to reach out.',
      },
    ],
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let itemIndex = 0;

  return (
    <div className="max-w-4xl mx-auto">
      {faqData.map((category) => (
        <div key={category.title} className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 pb-2 border-b-2 border-blue-700">
            {category.title}
          </h2>
          <div className="space-y-4">
            {category.items.map((item) => {
              const currentIndex = itemIndex++;
              const isOpen = openIndex === currentIndex;
              return (
                <div
                  key={item.question}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleItem(currentIndex)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-blue-700 pr-4">{item.question}</span>
                    <span className="text-2xl text-blue-700 flex-shrink-0 transition-transform duration-300" style={{
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}>
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-100">
                      {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

