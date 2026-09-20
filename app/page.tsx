import Hero from '@/components/Hero';
import PropertiesShowcase from '@/components/PropertiesShowcase';
import RentalShowcase from '@/components/RentalShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';

export default function Home() {
  return (
    <>
      {/* 1. Hero Section - Warm radiant header & popular locality pills */}
      <Hero />

      {/* 2. Featured Rental Listing (Independent Kothi with Carousel & Commercial Shops) */}
      <RentalShowcase />

      {/* 3. Exclusive Flats & Apartments Photo Gallery */}
      <PropertiesShowcase />

      {/* 4. Why Choose Deepak Sharma */}
      <WhyChooseUs />

      {/* 5. Consultant Profile & Background */}
      <About />
    </>
  );
}
