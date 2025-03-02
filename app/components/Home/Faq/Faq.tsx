"use client";

import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-8 max-w-7xl mx-auto">
      <p className="text-2xl lg:text-3xl font-extrabold pb-16 text-center custom-selection-3">
        Frequently Asked Questions
      </p>
      <ul className="divide-y max-w-xl mx-auto">
        {faqData.map((faq, index) => (
          <li key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="relative flex gap-2 items-center w-full py-6 text-base font-semibold text-left md:text-lg"
            >
              <span className="flex-1 text-base-content custom-selection-3">
                {faq.question}
              </span>
              {openIndex === index ? (
                <svg
                  className="flex-shrink-0 size-4 ml-auto fill-current transition-transform duration-200"
                  xmlns="http://www.w3.org/2000/"
                  viewBox="0 0 16 16"
                >
                  <rect y="7" width="16" height="2" rx="1"></rect>
                </svg>
              ) : (
                <svg
                  className="flex-shrink-0 size-4 ml-auto fill-current transition-transform duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <rect y="7" width="16" height="2" rx="1"></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(90 8 8)"
                  ></rect>
                </svg>
              )}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-6 leading-relaxed">
                <ul className="space-y-3 list list-decimal list-inside leading-relaxed">
                  {faq.answer.map((ans, i) => (
                    <li key={i} className="list-item list-none">
                      <span className="font-semibold text-base-content">
                        {ans.title}
                      </span>{" "}
                      {ans.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const faqData = [
  {
    question: "What is SnapForge and how does it work?",
    answer: [
      {
        title: "💻",
        text: "SnapForge is a platform designed to automate repetitive tasks, optimize workflows, and help businesses scale effortlessly. With powerful AI tools and custom templates it adapts to your specific needs, streamlining your daily operations.",
      },
    ],
  },
  {
    question: "Is there a free trial?",
    answer: [
      {
        title: "📌",
        text: "You can test SnapForge for free with limited features for 1 week. After 1 week, you'll have the option to upgrade to one of our paid plans to unlock full access to all features, including premium tools and unlimited usage. It's a great way to explore SnapForge's capabilities before committing.",
      },
    ],
  },
  {
    question: "How does SnapForge integrate with other tools?",
    answer: [
      {
        title: "🔗",
        text: "SnapForge seamlessly integrates with popular tools like Instagram, X, Google, Twitch and many others. Our platform ensures you don't have to change your current system to start automating tasks",
      },
    ],
  },
  {
    question: "How 7/24 support works?",
    answer: [
      {
        title: "📞",
        text: "We offer special AI Assistant support available whenever you need it, along with a dedicated customer support team reachable via chat and email. Our 24/7 support ensures you're never left without assistance, no matter the time or issue.",
      },
    ],
  },
  {
    question: "How secure is my data with SnapForge?",
    answer: [
      {
        title: "🔒",
        text: "SnapForge prioritizes data security and follows industry-standard encryption protocols to protect your business data, ensuring your information is safe.",
      },
    ],
  },
];
