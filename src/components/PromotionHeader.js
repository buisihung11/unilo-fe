import { useState } from "react";
import StyledPromotion from "./styles/PromotionHeader.module.css";
import backImg from "../img/promotion/back.png";
import badgesTbl from "../img/promotion/tbl5.png";
import normalBadge from "../img/promotion/icon4.png";
import mediumBadge from "../img/promotion/icon5.png";
import specialBadge from "../img/promotion/icon2.png";

function PromotionHeader() {
  const [normalBadges, setnormalBadges] = useState(5);
  const [mediumBagdes, setmediumBagdes] = useState(10);
  const [specialBadges, setspecialBadges] = useState(3);
  return (
    <>
      <div className={StyledPromotion.wrapper}>
        <img
          src={backImg}
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
