"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqData = [
    {
      question: "What is the meaning of ASUROO and what it does?",
      answer: (
        <>
          A Simple Unique Rewarding search platform for insurance products. We
          provide customers with comparison and CashBack or instant commission
          rebate. You will enjoy the best of both worlds with ASUROO when you
          compare and save in the insurance product you need.
        </>
      ),
    },
    {
      question: "Is ASUROO quotation reliable?",
      answer: (
        <>
          ASUROO integrates your MyInfo and Singpass information to automatically answer insurance partners&apos; questions about you and dynamically generate quotations based on the coverage you need.
        </>
      ),
    },
    // ... other FAQ items ...
    {
      question: "How is ASUROO different from other insurance sites?",
      answer: (
        <>
          ASUROO is an insurance platform, not an insurance company because we
          do not underwrite policies. Insurance commissions are already built
          into the price of an insurance policy, so you&apos;re not paying any extra
          when buying from ASUROO but that doesn&apos;t mean you can&apos;t find ways to
          save money! That&apos;s why ASUROO helps you compare quotes from multiple
          companies in one simple platform through our unique business model
          that strikes to reward its community members within. We make it
          seamless and interactive with online tools supported by expansive
          InsurePedia, guides and experience from real, licensed humans to help
          you get covered.
        </>
      ),
    },
    {
      question: "Is it safer to buy insurance policy from ASUROO?",
      answer: (
        <>
          Banks, Insurance companies and Insurance Brokers must be licensed and
          regulated by Monetary Authority of Singapore (MAS). It is actually
          safer to buy insurance policy from ASUROO because we are Insurance
          Broker. We comply to stringent business requirements from Monetary
          Authority of Singapore (MAS), to promote and support the growth and
          development of insurance industry in Singapore. ASUROO as your
          representing Insurance Broker will fight for you and your interest at
          best. When our business objective is to share the reward and/or
          commission with you, there is no need to push for or give preference to
          any one insurer over another.
        </>
      ),
    },
    {
      question: "Is ASUROO licensed?",
      answer: (
        <>
          YES! ASUROO as Insurance Brokers are required by law in Singapore to
          be licensed by the Monetary Authority of Singapore (MAS). View our license{" "}
          <a
            href="https://eservices.mas.gov.sg/fid/institution/detail/253856-ASUROO-PTE-LTD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primarypink font-semibold hover:underline"
          >
            here
          </a>
          .
        </>
      ),
    },
    {
      question: "What is ASUROO's Give-Back and how does it works?",
      answer: (
        <>
          ASUROO was designed for a good social purpose, to create a rewarding community. We take a slice of the commission to operate our business and give-back the rest to you as CashBack or Instant Commission Rebate in your premium. We believe this is a win-win solution for everyone because your happiness is key to our business success and sustainability. The More you saved, the more successful ASUROO will be!
        </>
      ),
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <div className="py-20 px-4 from-slate-50 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primaryblack mb-4">
            Ask & Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group`}
            >
              {/* Animation wrapper SEPARATE, so button is always clickable */}
              <div className={`animate-fade-in-up delay-${index}`}>
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primarypink-500 focus:ring-inset pointer-events-auto"
                  aria-expanded={openItem === index}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4 group-hover:text-primarypink-600 transition-colors duration-200">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      openItem === index
                        ? "rotate-180 text-primarypink-500"
                        : "group-hover:text-primarypink-500"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-primarypink-200 to-darkpink-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
