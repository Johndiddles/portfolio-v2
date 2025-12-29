import ContactSection from "@/components/ContactSection/ContactSection";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";

const Home = () => {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "John Adepelumi",
            url: "https://www.johndiddles.dev",
            image: "https://www.johndiddles.dev/opengraph-image.png",
            sameAs: [
              "https://www.linkedin.com/in/john-adepelumi-52b22b128/",
              "https://github.com/Johndiddles",
              "https://x.com/john_diddles",
              "https://x.com/Diddlescode",
            ],
            jobTitle: "Full Stack Engineer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
          }),
        }}
      />
      <Hero />
      <Projects />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
