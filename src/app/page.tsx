import Style from "./page.module.scss";
import Header from "@/src/components/header/page";
import Footer from "@/src/components/footer/page";
import CertificationBox from "@/src/components/certificationbox/page"
import Skill from "@/src/components/skill/page";
import Work from "@/src/components/work/page";
import Image from "next/image";
import HeroImage from "@/public/Images/hero-image.png"


export default function Home() {
  return (
    <>
      <Header />
      <div id="hero" className={Style.hero}>
        <div className={Style.heroContent}>
          <Image src={HeroImage} alt="Hero Image" className={Style.heroImage} />
          <p className={Style.heroText}>
            Welcome to the <br />
            New My WebPage!!
          </p>
        </div>
      </div>
      <div className={Style.mainContent}>
        <div id="about" className={Style.about}>
          <h2 className={Style.subText}>About</h2>
          <div className={Style.textBox}>
            <p className={Style.aboutText}>
              はじめまして、ウィザマリと申しますm(_ _)m<br />
              マリオのゲームやグッズ集めが趣味のマリオファンです。<br />
              動画編集やプログラミングもやってたりします。<br />
              YouTubeでゲーム実況上げてたりするのでチャンネル登録してくれると嬉しいです。
            </p>
          </div>
        </div>
        <div id="certification" className={Style.certification}>
          <h2 className={Style.subText}>Certifications</h2>
          <div className={Style.certificationContent}>
            <CertificationBox name="ITパスポート" description="情報処理推進機構(IPA)" date="2024年5月" iconName="Passport"/>
            <CertificationBox name="情報技術検定1級" description="全国工業高等学校長協会" date="2025年2月" iconName="Information"/>
            <CertificationBox name="基本情報技術者試験" description="情報処理推進機構(IPA)" date="2025年5月" iconName="PcDisplay"/>
            <CertificationBox name="情報セキュリティマネジメント試験" description="情報処理推進機構(IPA)" date="2025年8月" iconName="MdSecurity"/>
          </div>
        </div>
        <div id="skills" className={Style.skills}>
          <h2 className={Style.subText}>Skills</h2>
          <div className={Style.skillContent}>
            <Skill name="Unity" iconName="Unity"/>
            <Skill name="C#" iconName="C#"/>
            <Skill name="HTML" iconName="HTML"/>
            <Skill name="CSS" iconName="CSS"/>
            <Skill name="JavaScript" iconName="JavaScript"/>
            <Skill name="TypeScript" iconName="TypeScript"/>
            <Skill name="Processing" iconName="Processing"/>
            <Skill name="Java" iconName="Java"/>
            <Skill name="React" iconName="React"/>
            <Skill name="Next.js" iconName="Next.js"/>
            <Skill name="GitHub" iconName="GitHub"/>
            <Skill name="Firebase" iconName="Firebase"/>
            <Skill name="Figma" iconName="Figma"/>
            <Skill name="Node-red" iconName="Node-red"/>
          </div>
        </div>
        <div id="works" className={Style.works}>
          <h2 className={Style.subText}>Works</h2>
          <div className={Style.worksContent}>
            <Work title="ポートフォリオサイト" language="Next.js/TypeScript" image="wizamari1138" url="https://wizamari1138.vercel.app/"/>
            <Work title="サボりの達人" language="Unity/C#" image="the_master_of_slacking" url="https://unityroom.com/games/the-master-of-slacking"/>
            <Work title="ボルケーノガーディアン" language="Unity/C#" image="volcano_gardian" url="https://wizamari1138.github.io/volcano-guardian/"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}