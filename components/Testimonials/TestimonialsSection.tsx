import Testimonials from "./Testimonials";

const TestimonialsSection = () => {
  return (
    <section
      className="py-8 md:py-12 lg:py-16 xl:py-20 overflow-x-hidden"
      id="testimonials"
    >
      <div className="uppercase mx-auto text-center flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-jost font-medium tracking-[0.75rem] md:tracking-[1.5rem]">
          Testimonials
        </h2>
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-xl font-semibold tracking-[0.05rem] md:tracking-[0.15rem]">
          People I&apos;ve worked with have said some nice things
        </p>
      </div>
      <Testimonials />
    </section>
  );
};

export default TestimonialsSection;
