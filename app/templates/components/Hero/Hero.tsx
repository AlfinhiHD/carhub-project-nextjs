import Image from "next/image";
import Button from "../../elements/Button/Button";
import Information from "../../elements/Information/Information";
import CustomButton from "../../elements/Button/Button";

const Hero = () => {
  return (
    <div className="relative max-w-[1440px]">

      <div className="flex flex-col xl:flex-row pt-24 relative">
        <div className="z-10">
          <Information
            title="Find, book, or rent a car quickly and easily!"
            titleStyle="text-[4rem] leading-[5.5rem] font-bold pb-10"
            subtitle="Streamline your car rental experience with our effortless booking process."
            subtitleStyle="text-2xl font-light pb-12"
          />
          <CustomButton buttonType="primary" buttonText="Explore Cars" />
        </div>

        <div className="absolute xl:-top-[7.5rem] xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px]"></div>
        <Image src="/car.webp" alt="Car Logo" width={1000} height={500} />

      </div>
    </div>
  );
};

export default Hero;
