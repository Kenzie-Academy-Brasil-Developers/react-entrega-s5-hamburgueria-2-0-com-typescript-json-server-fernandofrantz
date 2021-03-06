import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 80%;
  height: 80%;

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    margin-top: 50px;
  }
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  margin: 20px;
  width: 100%;
  max-width: 320px;

  > input {
  }

  > button {
    width: 92%;
    max-width: 230px;
    margin: 20px 0px 20px 0px;
    border-radius: 5px;
    border: none;
    height: 30px;
    background-color: #219653;
    color: #ffffff;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > a {
    text-decoration: none;
    font-size: 12px;
    height: 12px;
    margin: 20px 0px 0px 45px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #828282;
  }

  > p {
    height: 20px;
    margin: 0px;
    font-weight: bold;
    margin: 20px 0px 0px 0px;
    font-size: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

export const Title = styled.div`
  display: none;
  text-align: center;
  width: 30%;
  margin-right: 90px;

  > .titleBurguer {
    font-size: 25px;
  }
  > .titleKenzie {
    color: red;
    margin-left: 10px;
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    margin: 0px;
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  height: 50px;
  background-color: #ffffff;
  max-width: 320px;

  > span {
    font-size: 10px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  > svg {
    color: #219653;
    background-color: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
    padding: 5px;
    margin: 10px;
    width: 50px;
    height: 20px;
  }

  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;
