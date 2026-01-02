import { useState } from "react";

const faqs = [
  {
    question: "What services are available?",
    answer:
      "We offer construction, land sourcing, and project management for residential and commercial needs. Our team oversees every stage for quality and efficiency.",
  },
  {
    question: "How do I begin a project?",
    answer:
      "Contact us to discuss your goals. We’ll walk you through consultation, design, and planning to start your project smoothly.",
  },
  {
    question: "Can I change the house design?",
    answer:
      "Yes, our designs are flexible. Work with our team to tailor your home to your style, needs, and budget.",
  },
];

const CommonQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-[#050d12] to-[#07141a] text-white py-28">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section label */}
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-6">
          Common Questions
        </p>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-semibold mb-10">
          Your project, our expertise
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 mb-14 leading-relaxed">
          Discover how we streamline construction, offer diverse land options,
          and provide comprehensive services to meet your needs.
        </p>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 pb-6">
              {/* Question */}
              <button
                onClick={() =>
                  setActiveIndex(index === activeIndex ? -1 : index)
                }
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>

                <span className="text-xl text-gray-400">
                  {activeIndex === index ? "–" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="mt-10 inline-block text-sky-400 hover:gap-3 transition-all"
        >
          Contact Us →
        </a>
      </div>
    </section>
  );
};

export default CommonQuestions;
