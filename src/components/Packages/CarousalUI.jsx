import styled from "styled-components";

export const CarousalU = styled.div`
  :root {
    --color-primary: #008cff;
    --color-btn-primary-bg: linear-gradient(93deg, #53b2fe, #065af3);
    --color-btn-primary-text: #fff;
    --color-btn: #008cff;
    --btn-border-radius: 4px;
  }

  .sliderContainer {
    width: 100%;
    margin: auto;
    position: relative;
    background-color: var(--color-btn-primary-text);
    padding: 30px 50px 25px 50px;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .each-slide > div {
    padding: 10px;
    margin: 20px 10px 5px 10px;
    border-radius: 7px;
  }

  .homeTitle {
    font-size: 25px;
  }

  .homeSubTitle {
    font-size: 90px;
    font-weight: 600;
    color: white;
  }

  .arrow {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: white;
    box-shadow: 0 2px 4px 4px rgb(10 10 10 / 3%);
    cursor: pointer;
    top: -30px; /* Position them at the top */
    border-radius: 5px;
  }

  .left-arrow {
    right: 80px; /* Adjust for the left arrow */
    z-index: 1;
  }

  .right-arrow {
    right: 40px; /* Adjust for the right arrow */
  }

  @media (max-width: 1023px) {
    .arrow {
      top: 50%;
      transform: translateY(-50%);
    }

    .left-arrow {
      left: 0;
      z-index: 1;
    }

    .right-arrow {
      right: 0;
      z-index: 1;
    }
  }

  .ind-slide {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    box-shadow: 0 2px 5px 2px rgb(10 10 10 / 10%);
  }

  .sliderTitle {
    display: flex;
  }

  .sliderLinks {
    margin-left: 20px;
    display: flex;
  }

  .indLinks {
    margin: 0px 10px;
  }

  .indLinks:hover {
    cursor: pointer;
  }

  .imageSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .imageSection img {
    width: 90px;
    height: 85%;
    border-radius: 5px;
  }

  .imageSection p {
    font-size: 12px;
    color: #9b9b9b;
  }

  .contentSection {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
  }

  .offerCardTitle {
    font-size: 12px;
    color: #9b9b9b;
    margin: 0px 0px 5px;
  }

  .offerCardSubTitle {
    font-size: 18px;
    font-weight: bold;
    margin: 0px 0px 10px;
  }

  .divider {
    width: 40px;
    height: 1px;
    background-color: #eb2026;
    margin: 0px 0px 10px;
  }

  .offerCardOffers {
    font-size: 14px;
    color: #9b9b9b;
  }

  .knowMore {
    display: flex;
    justify-content: end;
  }

  .knowMore p {
    font-size: 14px;
    color: #008cff;
    font-weight: bold;
  }

  .knowMore p:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .contentSection {
      width: 100%;
    }
  }

  @media (min-width: 575px) and (max-width: 767px) {
    .contentSection {
      width: 100%;
    }

    .offerCardTitle {
      font-size: 10px;
    }

    .offerCardSubTitle {
      font-size: 15px;
    }

    .offerCardOffers {
      font-size: 12px;
    }

    .knowMore p {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 574px) {
    .contentSection {
      width: 100%;
    }

    .sliderContainer {
      padding: 30px 10px 25px 10px;
    }

    .offerCardTitle {
      font-size: 10px;
    }

    .offerCardSubTitle {
      font-size: 15px;
    }

    .offerCardOffers {
      font-size: 12px;
    }

    .knowMore p {
      font-size: 12px;
    }
  }
`;
