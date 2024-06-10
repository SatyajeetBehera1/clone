import styled from "styled-components";

export const Locationscss = styled.div`

.mainContainer {
    width: 85%;
    margin: auto;
    position: relative;
    background-color: white;
    padding: 25px 25px;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .indContainer {
    display: flex;
    align-items: center;
    margin: 10px 0px;
    width: calc(33.33% - 20px);
    margin-bottom: 20px;
  }

  .indContainer img {
    border-radius: 50%;
    margin: 0px 10px 0px 0px;
    width: 50px;
    height: 50px;
  }

  .indCardTitle {
    font-size: 18px;
    margin: 0px 0px 5px;
    font-weight: 400;
  }

  .indCardLocation {
    font-size: 12px;
    color: #4a4a4a;
  }

  .span {
    font-size: 12px;
    color: black;
    font-weight: 500;
  }

  @media only screen and (max-width: 768px) {
    .indContainer {
      width: calc(50% - 20px);
    }
  }

  @media only screen and (max-width: 574px) {
    .mainContainer {
      padding: 25px 20px;
    }

    .indContainer {
      width: 100%;
    }
  }
`;
