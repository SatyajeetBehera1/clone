import styled from 'styled-components'

export const FromtoLapcss = styled.div`
  height: 85px;
  width: 95%;
  margin: auto;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 767px) {
    display: none;
  }

  .fromtodiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 87%;
  }

  h3 {
    position: relative;
    top: -15px;
    left: 12px;
    font-size: 16px;
    font-weight: 500;
  }

  .fromtodiv div {
    height: 82%;
  }

  .fromtodiv select {
    padding: 4%;
    width: 100%;
    font-size: 25px;
    font-weight: bold;
    border: none;
    position: relative;
    top: -25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }

  .fromtodiv2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 87%;
  }

  .date {
    border: none;
    font-size: 16px;
    margin-left: 10px;
  }

  .fromtodiv2 div {
    // border-right: 0.01em solid #d4d0d0;
    height: 89%;
  }

  .fromtodiv2 select {
    padding: 4%;
    width: 100%;
    font-size: 25px;
    font-weight: bold;
    border: none;
    position: relative;
    top: -19px;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }
`



export const Fromtocss = styled.div`
  height: auto;
  width: 95%;
  margin: auto;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .fromtodiv,
  .dateDiv,
  .travelClass {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 10px;
    color: #333;
    font-size: 18px;
  }

  select,
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }

  select {
    background-color: #f9f9f9;
  }

  input[type="date"] {
    background-color: #f9f9f9;
  }

  .travelClass select {
    width: calc(50% - 5px);
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .row div {
    width: 48%;
  }

  @media (max-width: 767px) {
    .fromtodiv,
    .dateDiv,
    .travelClass {
      margin-bottom: 10px;
    }

    .row div {
      width: 100%;
    }

    .row {
      flex-direction: column;
    }

    input[type="date"],
    select {
      width: calc(100% - 22px);
    }
  }
`;