import React from "react";
import StyledVoucher from "./PromotionVoucher.module.css";

function PromotionVoucher(props) {
  return (
    <div className={StyledVoucher.wrapper}>
      <img src={props.item.img} alt="normal badge" />

      <div className={StyledVoucher.contentContainer}>
        <span className={StyledVoucher.title}>{props.item.title}</span>
        <span className={StyledVoucher.description}>
          {props.item.description}
        </span>
      </div>

      <button type="button" className={StyledVoucher.specialButton}>
        <span>{props.item.quantity}</span>
        <img src={props.item.badgeIcon} alt="back button" />
      </button>
    </div>
  );
}

export default PromotionVoucher;
