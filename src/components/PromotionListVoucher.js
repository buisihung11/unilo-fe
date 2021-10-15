import React from "react";
import PromotionVoucher from "./PromotionVoucher";
import StyledPromotionListVoucher from "./styles/PromotionListVoucher.module.css";
import lounge from "../img/promotion/lounge.jpg";
import badgeMedium from "../img/promotion/icon5.png";

const vouchers = [
  {
    img: lounge,
    title: "VIP Lounge",
    description: "Tặng 1 lượt checkin phòng chờ thương gia",
    quantity: 3,
    badgeIcon: badgeMedium,
  },
  {
    img: lounge,
    title: "VIP Lounge",
    description: "Tặng 1 lượt checkin phòng chờ thương gia",
    quantity: 3,
    badgeIcon: badgeMedium,
  },
  {
    img: lounge,
    title: "VIP Lounge",
    description: "Tặng 1 lượt checkin phòng chờ thương gia",
    quantity: 3,
    badgeIcon: badgeMedium,
  },
];

function PromotionListVoucher() {
  return (
    <div className={StyledPromotionListVoucher.storeWrapper}>
      <div className={StyledPromotionListVoucher.storeTitleContainer}>
        <p className={StyledPromotionListVoucher.firstStoreTitle}>
          Gian hàng ưu đãi
        </p>
        <p>Quà tặng của tôi</p>
      </div>
      <div className={StyledPromotionListVoucher.listVouchers}>
        {vouchers.map((voucher) => {
          return <PromotionVoucher item={voucher} />;
        })}
      </div>

      {/* <div className={StyledPromotionListVoucher.listVouchers}>
        <PromotionVoucher />
        <PromotionVoucher />
        <PromotionVoucher />
      </div> */}
    </div>
  );
}

export default PromotionListVoucher;
