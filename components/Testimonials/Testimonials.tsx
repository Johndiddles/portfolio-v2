"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { AllTestimonials } from "@/constants/testimonials";
import { SwiperSlide } from "swiper/react";
import TestimonialCarousel from "./TestimonialCarousel";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./testimonials.styles.css";

const Testimonials = () => {
  return (
    <div className=" lg:pt-16 pb-4">
      <TestimonialCarousel>
        {AllTestimonials?.map((testimony, index) => (
          <SwiperSlide
            key={index}
            className="!w-full md:max-w-[72ch] lg:max-w-[80ch] mx-auto md:mx-6 lg:-mx-12"
          >
            <TestimonialCard
              author_company={testimony.author_company}
              author_name={testimony.author_name}
              author_title={testimony.author_title}
              testimony={testimony.testimony}
            />
          </SwiperSlide>
        ))}
      </TestimonialCarousel>
    </div>
  );
};

export default Testimonials;
