import { useState } from "react";
import StyledPromotion from "./PromotionSpecialBox.module.css";
import acbActivity from "../../assets/images/acb-activity.jpg";
import acbLogo from "../../assets/images/acb-logo.png";
import mediumBadge from "../../assets/icons/honeypot2.png";

function PromotionSpecial() {
  const [voucherDescription, setvoucherDescription] = useState(
    " Ưu đãi 0.5% lãi suất khi gửi tiền tiết kiệm qua ..."
  );
  const [noOfBadge, setnoOfBadge] = useState(3);
  return (
    <div className={StyledPromotion.wrapper}>
      <div className={StyledPromotion.leftContentContainer}>
        <img
          src={acbActivity}
          alt="back button"
          onClick={() => console.log("CHECK")}
          className={StyledPromotion.activityImg}
        />
      </div>
      <div className={StyledPromotion.rightContentContainer}>
        <img
          src={acbLogo}
          alt="back button"
          onClick={() => console.log("CHECK")}
          className={StyledPromotion.acbLogo}
        />
        <span>
          Ưu đãi 0.5% lãi suất khi gửi
          <br />
          tiền tiết kiệm qua ...
        </span>
        <div className={StyledPromotion.specialButtonContainer}>
          <span>{noOfBadge}</span>
          <img src={mediumBadge} alt="medium badge" />
        </div>
      </div>
    </div>
  );
}

export default PromotionSpecial;
