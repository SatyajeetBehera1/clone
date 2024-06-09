// import styled from 'styled-components';

// export const Icondivcss = styled.div`
//   .icondiv {
//     height:75px;
//     padding-top: 5px;
//     margin: auto;
//     background: white;
//     border-radius: 8px;
//     display: flex;
//     flex-wrap: wrap;
//     width: 80%;
//     justify-content: space-around;
//     text-align: center;
//     box-shadow: 1px 3px 5px #c0c0c0;
//     p {
//       padding: 0px;
//       margin: -6px;
//       color: #555454;
//       font-size: 13px;
//     }
//     span {
//       color: #a3a3a3;
//       cursor: pointer;
//     }
//     span:hover {
//       color: #2db0fc;
//     }
//     div:hover {
//       color: #2db0fc;
//     }

//     /* Responsive layout adjustments */
//     @media (max-width: 767px) {
//       width: 70%;
//       margin-bottom: 20px; /* Add bottom margin for mobile */
//     }
//   }

//   /* Adjust layout for mobile */
//   @media (max-width: 767px) {
    
//     .icondiv > div {
//       width: calc(33.33% - 20px); /* Adjust as needed */
//       margin: 10px;
//     }
//     .icondiv{
//       height:78%;
//     }
//     .icondiv > div > span{
//       height:10%;
//       width: 10%;
//     }
//   }
// `;



import styled from 'styled-components';

export const Icondivcss = styled.div`
  .icondiv {
    height: 75px;
    padding-top: 5px;
    margin: auto;
    background: white;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: space-around;
    text-align: center;
    box-shadow: 1px 3px 5px #c0c0c0;
    p {
      padding: 0px;
      margin: -6px;
      color: #555454;
      font-size: 13px;
    }
    span {
      color: #a3a3a3;
      cursor: pointer;
    }
    span:hover {
      color: #2db0fc;
    }
    div:hover {
      color: #2db0fc;
    }

    /* Responsive layout adjustments */
    @media (max-width: 767px) {
      width: 70%;
      margin-bottom: 20px; /* Add bottom margin for mobile */
      display: none; /* Hide the entire icondiv container */
    }
  }

  /* Adjust layout for mobile */
  @media (max-width: 767px) {
    .icondiv > div {
      display: none; /* Hide individual divs */
    }
  }
`;
