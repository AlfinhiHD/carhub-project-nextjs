import { InformationProps } from "@/app/types";

const Information: React.FC<InformationProps> = ({ title, subtitle, titleStyle, subtitleStyle, containerStyle }) => {
  return (
    <div className={containerStyle}>
      <h1 className={titleStyle}>{title}</h1>
      <h3 className={subtitleStyle}>{subtitle}</h3>
    </div>
  );
};

export default Information;