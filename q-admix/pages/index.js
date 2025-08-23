import CTA from "../components/ui/CTA";
import FAQs from "../components/ui/FAQs";
import Features from "../components/ui/Features";
import Hero from "../components/ui/Hero";
import Pricing from "../components/ui/Pricing";
import Testimonial from "../components/ui/Testimonial";
import VisualFeatures from "../components/ui/VisualFeatures";
import QAdMixCaseStudy from "../components/ui/QAdMixCaseStudy";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <QAdMixCaseStudy />
      {/* <VisualFeatures /> */}
      <Features />
      {/* <CTA />
      <Testimonial />
      <Pricing /> */}
      <FAQs />
      <ContactForm />
    </>
  );
}
