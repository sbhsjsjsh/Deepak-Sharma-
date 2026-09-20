import Hero from '@/components/Hero';
import PropertiesShowcase from '@/components/PropertiesShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import LocationSection from '@/components/LocationSection';

export default function Home() {
  return (
    <>
      {/* 1. Hero Section - Warm radiant header & popular locality pills */}
      <Hero />

      {/* 2. Exclusive Properties Showcase */}
      <PropertiesShowcase />

      {/* 3. Why Choose Deepak Sharma */}
      <WhyChooseUs />

      {/* 4. Consultant Profile & Background */}
      <About />

      {/* 5. Key Noida & Yamuna Expressway Micro-Markets & Map */}
      <LocationSection />
    </>
  );
}
