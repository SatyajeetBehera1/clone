
import styled from "styled-components";

export const Luxecss = styled.div`
  .Luxecss {
    .container {
      background-color: #ebe7e7;
      padding-left: 132px;
      padding-right: 150px;
      padding-top: 30px;
      padding-bottom: 20px;
      cursor: pointer;
      overflow: hidden;
      box-sizing: border-box;
    }

    .bigcard {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      height: 320px;
      background-color: #fffbf4;
      border-radius: 7px;
      display: flex;
      gap: 30px;
      padding-bottom: 20px;

    }
    .title {
      padding: 35px;
      box-sizing: border-box;
    }
    .title h4 {
      color: #4a4a4a;
      margin: 0px 0px 5px;
    }

    .title h1 {
      color: #e1be5b;
      margin: 0px 0px 5px;
    }
    .title p {
      font-size: 18px;
    }
    .title button {
      background-color: #e1be5b;
      margin: 15px 0px 0px;
      padding: 12px 32px;
      font-weight: 900;
      border-radius: 30px;
      border: none;
      cursor: pointer;
    }
    .cardsdiv {
      display: flex;
      gap: 15px;
      padding: 35px;
      border-radius: 7px;
    }
    .smallcard img {
      height: 170px;
      width: 100%;
      overflow: hidden;
    }

    .smallcard {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      overflow: hidden;
      border-radius: 7px;
    }

    .titleCard h2 {
      font-size: 20px;
      margin: 0px 0px 3px;
    }

    .titleCard p {
      margin: 0px;
      color: #4a4a4a;
    }

    .titleCard {
      padding: 0px 10px;
      background-color: white;
      border-radius: 7px;
    }

    @media only screen and (max-width: 600px) {
      .container {
        background-color: #f2f2f2;

        margin: 0px;
        padding-left: 30px;

        cursor: pointer;
        overflow: hidden;
        box-sizing: border-box;
      }

      .bigcard {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        height: 1250px;
        width: 350px;
        background-color: #fffbf4;
        border-radius: 7px;

        display: flex;
        flex-direction: column;
      }

      .cardsdiv {
        display: flex;
        flex-direction: column;
      }
    }

    @media only screen and (min-width: 600px) and (max-width: 992px) {
      .container {
        background-color: #f2f2f2;

        margin: 0px;
        padding-left: 80px;

        cursor: pointer;
        overflow: hidden;
        box-sizing: border-box;
      }

      .bigcard {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        height: 320px;
        /* width: 350px; */
        width: 750px;
        background-color: #fffbf4;
        border-radius: 7px;

        display: flex;
      }

      .cardsdiv {
        display: flex;
      }

      .title button {
        background-color: #e1be5b;

        font-weight: 900;
        border-radius: 30px;
        border: none;
        cursor: pointer;
      }
      .title p {
        font-size: 15px;
      }
    }
  }
`;