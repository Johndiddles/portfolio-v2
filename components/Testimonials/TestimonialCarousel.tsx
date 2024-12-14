import { ReactNode } from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper } from "swiper/react";

const carouselProps = {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  grabCursor: true,
  centeredSlides: true,
  effect: "coverflow",
  loop: true,
};

const TestimonialCarousel = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="hidden md:flex justify-center items-center">
        <Swiper
          {...carouselProps}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          slidesPerView={"auto"}
          className="multi-item-carousel hidden md:block"
        >
          {children}
        </Swiper>
      </div>

      <div className="flex justify-center items-center md:hidden px-4">
        <Swiper
          {...carouselProps}
          modules={[Pagination, Autoplay]}
          slidesPerView={"auto"}
          className="w-full px-4"
        >
          {children}
        </Swiper>
      </div>
    </>
  );
};

export default TestimonialCarousel;
