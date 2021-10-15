import React from "react";
import {StyledUniloWrapper, VerticalView, DashedLine} from "../../components/AppStyles";
import Header from "../../components/Header";
import SimpleTable from "../../components/SimpleTable";
import PrimaryButton from "../../components/PrimaryButton";
import badge from "../../assets/icons/badge-2.png";

export default function Reward(props) {
  return <StyledUniloWrapper>
    <VerticalView>
      <Header style={{flex: 1}} />
      <SimpleTable style={{flex: 5}} title='Phần thưởng'>
        <div className="w-100">
          <h1>Chúc mừng</h1>
          <DashedLine />
          <p>Bạn đã nhận được 01 phần quà</p>
        </div>
        <div>
          <img src={badge} width="50%"/>
          <h4 className="mt-4 stroked-text">03 hũ mật ong thường</h4>
        </div>
        <div className="w-100">
        <DashedLine />
        <p>Bạn có muốn tiếp tục?</p>
        </div>
      </SimpleTable>
      <PrimaryButton style={{flex: 1}}>Tiếp tục</PrimaryButton>
    </VerticalView>
  </StyledUniloWrapper>
}
