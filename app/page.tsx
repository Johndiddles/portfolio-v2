import ContactSection from "@/components/ContactSection/ContactSection";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
