import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";

const faqsList = [
  {
    q: "What is quantum-powered advertising optimization?",
    a: "Quantum-powered advertising optimization leverages quantum computing principles to process complex ad performance data at unprecedented speeds, identifying patterns and opportunities that traditional AI might miss. This results in more efficient ad spend and better campaign performance.",
  },
  {
    q: "How is Q-Admix™ different from other ad platforms?",
    a: "Unlike traditional platforms, Q-Admix™ combines quantum computing with classical AI to optimize ad performance across channels in real-time. Our algorithms can process exponentially more variables and scenarios, delivering superior ROI and faster optimization cycles.",
  },
  {
    q: "What advertising platforms does Q-Admix™ support?",
    a: "Q-Admix™ integrates with all major advertising platforms including Google Ads, Meta Ads, LinkedIn, Twitter, TikTok, and programmatic DSPs. Our unified dashboard provides cross-platform insights and optimization.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients see measurable improvements within 7-14 days as our quantum algorithms analyze patterns and optimize campaigns. Full optimization typically occurs within 30-45 days as the system learns your specific business goals and customer behavior.",
  },
  {
    q: "Do I need technical expertise to use Q-Admix™?",
    a: "Not at all. Q-Admix™ is designed for marketers, not quantum physicists. Our intuitive interface makes it easy to set up campaigns, while our AI handles the complex optimization behind the scenes.",
  },
  {
    q: "How does your pricing work?",
    a: "We offer tiered pricing based on your monthly ad spend. Our plans scale with your business, from growing startups to large enterprises. Contact our sales team for a custom quote based on your specific needs.",
  },
];

const FAQs = () => (
  <SectionWrapper id="faqs">
    <div className="custom-screen text-gray-300">
      <div className="max-w-xl text-center xl:mx-auto">
        <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3">
          Get answers to common questions about Q-Admix™'s quantum advertising platform.
        </p>
      </div>
      <div className="mt-12">
        <LayoutEffect
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0 translate-y-12",
          }}
        >
          <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
            {faqsList.map((item, idx) => (
              <li
                key={idx}
                className="hover-glow space-y-3 p-4 rounded-xl border border-gray-800 transition-all duration-300"
                style={{
                  background:
                    "radial-gradient(157.73% 157.73% at 50% -29.9%, rgba(203, 213, 225, 0.16) 0%, rgba(203, 213, 225, 0) 100%)",
                }}
              >
                <summary className="flex items-center justify-between font-semibold text-gray-100">
                  {item.q}
                </summary>
                <p
                  dangerouslySetInnerHTML={{ __html: item.a }}
                  className="leading-relaxed"
                >
                </p>
              </li>
            ))}
          </ul>
        </LayoutEffect>
      </div>
    </div>
  </SectionWrapper>
);

export default FAQs;
