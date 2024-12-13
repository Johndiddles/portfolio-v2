import Image from "next/image";
import LogoImage from "@/assets/Images/logo.png";

const Logo = () => {
  return (
    <div className="text-xl w-[160px] md:w-[200px] lg:w-[240px]">
      <Image
        src={LogoImage}
        alt="logo"
        width={undefined}
        height={undefined}
        sizes="100%"
      />
    </div>
  );
};

export default Logo;
