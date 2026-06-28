import Style from './page.module.scss';
import { BsPassport, BsPcDisplayHorizontal } from "react-icons/bs";
import { MdOutlineMedicalInformation, MdSecurity } from "react-icons/md";

type IconType = "Passport" | "Information" | "PcDisplay" | "MdSecurity";

type Props = {
    name: string;
    description: string;
    date: string;
    iconName: IconType;
}

const iconMap = {
    Passport: <BsPassport className={Style.icon} />,
    Information: <MdOutlineMedicalInformation className={Style.icon} />,
    PcDisplay: <BsPcDisplayHorizontal className={Style.icon} />,
    MdSecurity: <MdSecurity className={Style.icon}/>
}

export default function CertificationBox({name, description, date, iconName}: Props) {
  const icon = iconMap[iconName];  
  return (
    <div className={Style.certificationBox}>
      {icon}
      <p className={Style.name}>{name}</p>
      <p className={Style.description}>
        発行元：{description} <br/>
        取得年月日：{date}
      </p>
    </div>
  );
}