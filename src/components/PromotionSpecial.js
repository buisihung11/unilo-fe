import StyledPromotion from "./styles/PromotionSpecialBox.module.css";
import acbActivity from "../img/promotion/activity.png";
import acbLogo from "../img/promotion/ACB_Logo.png";
import mediumBadge from "../img/promotion/icon5.png";

function PromotionSpecial() {
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
        <p>
          Ưu đãi 0.5% lãi suất khi gửi <br />
          tiền tiết kiếm qua ...
        </p>
        <button type="button" className={StyledPromotion.specialButton}>
          <span>3</span>
          <img src={mediumBadge} alt="back button" />
        </button>
      </div>
    </div>
  );
}

export default PromotionSpecial;
