import React from "react";
import StyledVoucher from "./styles/PromotionVoucher.module.css";
import lounge from "../img/promotion/lounge.jpg";
import mediumBadge from "../img/promotion/icon5.png";
function PromotionVoucher(props) {
  return (
    <div className={StyledVoucher.wrapper}>
      <img src={lounge} alt="normal badge" />

      <div className={StyledVoucher.contentContainer}>
        <p className={StyledVoucher.title}>VIP Louge</p>
        <p className={StyledVoucher.description}>
          Tặng 1 lượt checkin phòng chờ thương gia
        </p>
      </div>

      <button type="button" className={StyledVoucher.specialButton}>
        <span>3</span>
        <img src={mediumBadge} alt="back button" />
      </button>
    </div>
  );
}

export default PromotionVoucher;
