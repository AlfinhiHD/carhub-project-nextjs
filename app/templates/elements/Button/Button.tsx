import { ButtonProps } from "@/app/types";
import Image from "next/image";

const CustomButton = ({
  buttonType,
  disabled,
  buttonStyle = "",
  textStyle = "",
  handleClick,
  buttonText,
  imageSrc,
  paddingX = "px-[2.5rem]",
  paddingY = "py-[1rem]",
}: ButtonProps) => {
  let baseStyle = `rounded-full font-small flex items-center justify-center ${paddingX} ${paddingY}`;
  let typeStyle = "";

  switch (buttonType) {
    case "primary":
      typeStyle = "bg-primary-blue text-white";
      break;
    case "secondary":
      typeStyle = "bg-white text-primary-blue";
      break;
    case "card":
      typeStyle = "bg-primary-blue text-white border absolute opacity-0 group-hover:opacity-100";
      break;
    default:
      typeStyle = "bg-primary-blue text-white";
      break;
  }

  return (
    <button className={`${baseStyle} ${typeStyle} ${buttonStyle}`} disabled={disabled} onClick={handleClick} type="button">
      <span className={textStyle}>{buttonText}</span>
      {imageSrc && <Image src={imageSrc} alt="Button icon" width={24} height={24} className="mr-2" />}
    </button>
  );
};

export default CustomButton;
