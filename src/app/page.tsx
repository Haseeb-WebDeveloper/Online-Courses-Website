import { HeroSection } from "@/components/layout/hero-section"
import { AboutSection } from "@/components/layout/about-section"
import { CoursesSection } from "@/components/layout/courses-section"
import { ScrollBasedVelocityDemo } from "@/components/layout/scrolling-txt";
import { SuccessStories } from "@/components/layout/success-stories"
import { CTASection } from "@/components/layout/cta-section"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"




export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <SuccessStories />
      {/* <ScrollBasedVelocityDemo/> */}
      <CTASection />
      <Footer />
    </>
  );
}
