import Image from "next/image";
import Button from "../../elements/Button/Button";
import Information from "../../elements/Information/Information";
import CustomButton from "../../elements/Button/Button";

const Hero =
  () => {
    return (
      <div className="relative max-w-[1440px]">
        <div className="flex flex-col xl:flex-row pt-24 relative">
          <div className="z-10">
            <Information
              title="Find, book, or rent a car quickly and easily!"
              titleStyle="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-tight font-bold pb-10"
              subtitle="Streamline your car rental experience with our effortless booking process."
              subtitleStyle="text-xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl font-light pb-12"
            />
            <CustomButton
              buttonType="primary"
              buttonText="Explore Cars"
            />
          </div>

          <div className="absolute xl:-top-[7.5rem] xl:-right-1/2 lg:top-[22rem] md:top-[22rem] sm:top-[22rem] top-[23rem] -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full h-[250px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-screen" />
          <Image
            src="/car.webp"
            alt="Car Logo"
            width={
              1000
            }
            height={
              500
            }
          />
        </div>
      </div>
    );
  };

export default Hero;
