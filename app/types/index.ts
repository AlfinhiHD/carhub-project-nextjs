import { MouseEventHandler } from "react";

export interface CarProps {
  city_mpg?: number;
  class?: string;
  combination_mpg?: number;
  cylinders?: number;
  displacement?: number;
  drive?: string;
  fuel_type?: string;
  highway_mpg?: number;
  make?: string;
  model?: string;
  transmission?: string;
  year?: number;
}

export interface FilterProps {
  fuel?: string;
  limit?: number;
  manufacturer?: string;
  model?: string;
  year?: number;
  transmission?: string;
  make?:string
}

export interface ButtonProps {
  buttonStyle?: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  buttonText?: string;
  buttonType?: "primary" | "secondary" | "card";
  imageSrc?: string;
  textStyle?: string;
  paddingX?: string;
  paddingY?: string;
}

export interface InformationProps {
  title?: string;
  subtitle?: string;
  titleStyle?: string;
  subtitleStyle?: string;
  containerStyle?: string;
}

export interface CarDialogProps {
  isOpen: boolean;
  onClose: () => void;
  car: CarProps;
}
