import Style from './page.module.scss';
import { BsPassport, BsPcDisplayHorizontal } from "react-icons/bs";
import { MdOutlineMedicalInformation, MdSecurity } from "react-icons/md";

type IconType = "Passport" | "Information" | "PcDisplay" | "MdSecurity";
type NameType = "ITパスポート" | "情報技術検定1級" | "基本情報技術者試験" | "情報セキュリティマネジメント試験";

type Props = {
    name: NameType;
    description: string;
    date: string;
    iconName: IconType;
}

const nameMap = {
    "ITパスポート": <>ITパスポート</>,
    "情報技術検定1級": <>情報技術検定1級</>,
    "基本情報技術者試験": <>基本情報技術者試験</>,
    "情報セキュリティマネジメント試験": <>情報セキュリティ<br />マネジメント試験</>
};

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
      <p className={Style.name}>{nameMap[name]}</p>
      <p className={Style.description}>
        発行元：{description} <br/>
        取得年月日：{date}
      </p>
    </div>
  );
}