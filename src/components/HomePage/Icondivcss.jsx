import styled from 'styled-components';

export const Icondivcss = styled.div`
  .icondiv {
    p {
      padding: 0px;
      margin: -6px;
      color: #555454;
      font-size: 13px;
    }

    @media (max-width: 767px) {
      width: 70%;
      margin-bottom: 20px; 
      display: none;
    }
  }

  @media (max-width: 767px) {
    .icondiv > div {
      display: none;
    }
  }
`;
