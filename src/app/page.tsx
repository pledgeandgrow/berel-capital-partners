
import AboutSection from "@/components/AboutSection";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <Testimonials/>
    <ConsultationForm />
    <Footer />
    
    </>
  );
}
