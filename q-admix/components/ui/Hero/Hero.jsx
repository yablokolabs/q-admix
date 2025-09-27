import GradientWrapper from "@/components/GradientWrapper";
import LayoutEffect from "@/components/LayoutEffect";
import heroImage from "@/public/images/hero.svg";
import Image from "next/image";
import NavLink from "../NavLink";

const Hero = () => (
  <section>
    <div className="custom-screen pt-6 pb-10 sm:pt-10 sm:pb-12 md:pt-16 md:pb-16">
      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div>
          <div className="space-y-8 max-w-4xl mx-auto text-center">
            <div className="flex justify-center pt-6 sm:pt-8">
              <img
                src="/q-admix-logo.svg"
                alt="Q-AdMix Logo"
                className="h-40 w-auto sm:h-48 md:h-64 lg:h-72 xl:h-[20rem] max-w-[92vw]"
                width="1600"
                height="400"
              />
            </div>
            <h1
              className="text-3xl bg-clip-text text-transparent qa-animated-gradient font-extrabold mx-auto sm:text-4xl md:text-5xl"
              style={{ lineHeight: "1.1" }}
            >
              The Quantum Way to Profitable Ads
            </h1>
            <p className="max-w-xl mx-auto text-gray-300 text-sm sm:text-base leading-snug mb-8">
              Hybrid quantum-classical AI for digital advertising optimization — maximizing ROI, reducing wasted spend,
              and dynamically balancing ad placements across platforms.
            </p>
            <div className="flex justify-center font-medium text-sm mt-2">
              <NavLink
                href="#contact-form"
                className="flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 "
              >
                Explore Q-AdMix™
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
          <GradientWrapper className="mt-16 sm:mt-28" wrapperClassName="w-full max-w-6xl mx-auto">
            <div className="relative w-full aspect-video max-h-[560px] mx-auto">
              <Image
                src={heroImage}
                alt="Q-AdMix Platform"
                className="shadow-lg rounded-2xl object-contain"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </GradientWrapper>
        </div>
      </LayoutEffect>
    </div>
  </section>
);

export default Hero;
