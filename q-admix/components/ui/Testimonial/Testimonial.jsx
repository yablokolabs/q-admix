import SectionWrapper from "@/components/SectionWrapper"
import GradientWrapper from "@/components/GradientWrapper"
import user1 from "@/public/testimonial/user1.webp"
import user2 from "@/public/testimonial/user2.webp"
import user3 from "@/public/testimonial/user3.webp"
import user4 from "@/public/testimonial/user4.webp"
import user5 from "@/public/testimonial/user5.webp"
import user6 from "@/public/testimonial/user6.webp"
import Image from "next/image"
import LayoutEffect from "@/components/LayoutEffect"

const Testimonial = () => {

    const testimonials = [
        {
            avatar: user1,
            name: "Sarah Johnson",
            title: "CMO at TechGrowth",
            quote: "Q-AdMix transformed our advertising strategy. The quantum-powered optimization increased our ROI by 47% in just three months while reducing our customer acquisition costs by 35%."
        },
        {
            avatar: user2,
            name: "Michael Chen",
            title: "Head of Digital at BrandVista",
            quote: "The cross-platform optimization from Q-AdMix is revolutionary. We're seeing consistently better performance across all our channels without increasing our ad spend."
        },
        {
            avatar: user3,
            name: "Emily Rodriguez",
            title: "CEO of MarketPulse",
            quote: "As a performance marketing agency, we've tried every tool out there. Q-AdMix's predictive analytics are in a league of their own. Our clients are thrilled with the results."
        },
        {
            avatar: user4,
            name: "David Kim",
            title: "Growth Lead at LaunchLabs",
            quote: "The ROI forecasting is scarily accurate. We've been able to make data-driven decisions with confidence, and it's paying off in our campaign performance."
        },
        {
            avatar: user5,
            name: "Priya Patel",
            title: "Marketing Director at ScaleRight",
            quote: "Q-AdMix's unified dashboard gives us complete visibility across all channels. The time we've saved on reporting alone has been worth the investment."
        },
        {
            avatar: user6,
            name: "James Wilson",
            title: "Founder of AdQuantum",
            quote: "The quantum algorithms in Q-AdMix are game-changers. We're seeing optimization patterns that traditional AI would take months to identify."
        },
    ]

    return (
        <SectionWrapper>
            <div id="testimonials" className="custom-screen text-gray-300">
                <div className="max-w-2xl text-center md:mx-auto">
                    <h2 className="text-3xl text-center font-semibold sm:text-4xl">
                    Trusted by leading brands and agencies
                    </h2>
                </div>
                <GradientWrapper wrapperClassName="max-w-sm h-40 top-12 inset-x-0" className="mt-12">
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-12"
                        }}
                    >
                        <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx} className="p-4 rounded-xl border border-gray-800"
                                        style={{
                                            backgroundImage: "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)"
                                        }}
                                    >
                                        <figure className="flex flex-col justify-between gap-y-6 h-full">
                                            <blockquote className="">
                                                <p className="">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <span className="block text-gray-50 font-semibold">{item.name}</span>
                                                    <span className="block text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                    </LayoutEffect>
                </GradientWrapper>
            </div>
        </SectionWrapper>
    )
}

export default Testimonial