import React, { useState } from "react";
import { CarProps } from "@/app/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import Button from "../Button/Button";
import CarDialog from "../../components/Dialog/Dialog";

interface CardProps {
  car: CarProps;
}

const Card: React.FC<CardProps> = ({ car }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const formattedMake = car.make
    ? car.make
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";
  const formattedModel = car.model
    ? car.model
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  const carRent = calculateCarRent(car.city_mpg, car.year);

  return (
    <div className="relative flex flex-col p-6 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <h2 className="text-xl font-semibold">
        {formattedMake} {formattedModel}
      </h2>

      <p className="flex mt-6 text-[38px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent} <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="flex justify-center">
        <Image src={generateCarImageUrl(car)} alt="car model" width={250} height={100} />
      </div>

      <div className="relative flex justify-center items-center mt-5">
        <div className="flex w-full justify-between group-hover:opacity-0">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/car-wheel.png" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px]">{car.transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.png" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{car.drive?.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas-station.png" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{car.city_mpg?? ""} MPG</p>
          </div>
        </div>
        <Button
          buttonType="card"
          buttonText="View More"
          paddingX="px-[3rem]"
          paddingY="py-[0.5rem]"
          imageSrc="/next.png"
          textStyle="me-5"
          handleClick={handleDialogOpen}
        />  
      </div>
      <CarDialog isOpen={isDialogOpen} onClose={handleDialogClose} car={car} />
    </div>
  );
};

export default Card;
