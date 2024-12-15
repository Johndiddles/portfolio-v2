import Image from "next/image";
import QuotesImage from "@/assets/icons/quotes.svg";
import { Testimonial } from "@/types/testimonials";

const TestimonialCard = ({
  testimony,
  author_name,
  author_title,
  author_company,
}: Testimonial) => {
  return (
    <div className="font-inter text-[#1E1E1E] flex flex-col gap-4 md:gap-8 p-6 md:p-12 bg-[#F8F8F8] rounded-tr-[32px] rounded-bl-[32px] w-fit mt-4 mb-16 md:mb-4 mx-auto">
      <p className="text-sm md:text-xl max-w-[52ch] min-h-[120px] font-light">
        {testimony}
      </p>
      <div className="flex justify-between items-center">
        <div className="text-sm md:text-lg">
          <h3 className="font-bold">{author_name}</h3>
          <p>
            {author_title}, {author_company}
          </p>
        </div>

        <div className="w-16 lg:w-28">
          <Image
            src={QuotesImage}
            alt="quotes"
            width={undefined}
            height={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
