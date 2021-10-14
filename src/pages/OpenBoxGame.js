import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledUniloWrapper } from "../components/styles/StyledUnilo";

// Images
import backImage from "../img/back.png";
import firstBox from "../img/giftbox/box_1.png";
import secondBox from "../img/giftbox/box_2.png";
import thirdBox from "../img/giftbox/box_3.png";
import fourthBox from "../img/giftbox/box_4.png";
import bgImage from "../img/bg.jpg";
import bean from "../img/bean.png";

const RootStyle = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 25vw;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url(${bgImage});
  background-size: cover;
  overflow: auto;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
`;

const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-family: "Mali", cursive;
  font-weight: bold;
  margin-top: -5px;
`;

const GiftBoxRowStyle = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
`;

const styles = {
  boxImg: {
    width: "32%",
    height: "32%",
    filter: "drop-shadow(0px 4px 40px #FFFFFF)",
  },
  title: {
    color: "#FFFFFF",
  },
  subTitle: {
    color: "#3391EC",
  },
  beanImg: {
    position: "relative",
    top: "6px",
    width: "30px",
  },
  exchangeRule: {
    color: "#F1D302",
    paddingTop: "15px",
  },
};

const openBox = () => {
  //TODO: Do something here
};

export default function OpenBoxGame() {
  return (
    <StyledUniloWrapper>
      <RootStyle>
        <Link to="/dashboard">
          <img src={backImage} alt="back button" width="65px" />
        </Link>
        <ContentStyle>
          <h1 style={styles.title}>Hộp quà bí mật</h1>
          <h3 style={styles.subTitle}>Săn mật cùng ACB Subie</h3>

          <h2 style={styles.exchangeRule}>
            1 lượt chơi = 2 <img style={styles.beanImg} src={bean} alt="bean" />
          </h2>
        </ContentStyle>
        <div>
          <GiftBoxRowStyle>
            <img
              src={firstBox}
              style={styles.boxImg}
              alt="box-1"
              onClick={openBox}
            />
            <img
              src={thirdBox}
              style={styles.boxImg}
              alt="box-1"
              onClick={openBox}
            />
          </GiftBoxRowStyle>
          <GiftBoxRowStyle>
            <img
              src={secondBox}
              style={styles.boxImg}
              alt="box-1"
              onClick={openBox}
            />
            <img
              src={fourthBox}
              style={styles.boxImg}
              alt="box-1"
              onClick={openBox}
            />
          </GiftBoxRowStyle>
        </div>
      </RootStyle>
    </StyledUniloWrapper>
  );
}
