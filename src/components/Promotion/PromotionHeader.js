import { useState } from "react";
import StyledPromotion from "./PromotionHeader.module.css";
import exitIon from "../../assets/icons/exit-icon.png";
import badgesTbl from "../../assets/images/badges-board.png";
import normalBadge from "../../assets/icons/honeypot1.png";
import mediumBadge from "../../assets/icons/honeypot2.png";
import specialBadge from "../../assets/icons/honeypot3.png";

function PromotionHeader() {
  const [normalBadges, setnormalBadges] = useState(5);
  const [mediumBagdes, setmediumBagdes] = useState(10);
  const [specialBadges, setspecialBadges] = useState(3);
  return (
    <>
      <div className={StyledPromotion.wrapper}>
        <img
          src={exitIon}
          alt="back button"
          onClick={() => console.log("CHECK")}
          className={StyledPromotion.backButton}
        />

        <div className={StyledPromotion.badgesTableContainer}>
          <img
            src={badgesTbl}
            alt="normal badge"
            className={StyledPromotion.badgesTbleImg}
          />
          <div className={StyledPromotion.badgesIconsContainer}>
            <img
              src={normalBadge}
              alt="normal badge"
              className={StyledPromotion.normalBadge}
            />
            <span>{normalBadges}</span>
            <img
              src={mediumBadge}
              alt="medium badge"
              className={StyledPromotion.mediumBadge}
            />
            <span>{mediumBagdes}</span>
            <img
              src={specialBadge}
              alt="special badge"
              className={StyledPromotion.specialBadge}
            />
            <span>{specialBadges}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PromotionHeader;
