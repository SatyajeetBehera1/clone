import styled from "styled-components";
export const Bookingcss = styled.div`
  width: 87%;
  height: 330px;
  border-radius: 10px;
  margin: auto;
  background-color: white;
  margin-top: 50px;
  @media (max-width: 767px) {
    margin-top: 50px;
    height: 100;
  }

  .icondiv {
    position: relative;
    top: -40px;
  }
  .checkboxdiv {
    display: flex;
    flex-direction: row;
    width: 95%;
    font-weight: 600;
    color: gray;
    position: relative;
    top: -30px;
    margin: auto;
    justify-content: space-between;
    input {
      width: 20px;
      margin-left: 10px;
    }
    @media (max-width: 767px) {
      &.hide-on-mobile {
        display: none !important;
        
      }
    }
  }
`;
