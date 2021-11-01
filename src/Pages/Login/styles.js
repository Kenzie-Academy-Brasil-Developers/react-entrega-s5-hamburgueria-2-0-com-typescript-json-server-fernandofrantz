import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 80%;

  > .secaoInicial {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    margin-top: 50px;

    > .secaoInicial {
      align-items: flex-start;
    }
  }
`;

export const Title = styled.div`
  display: flex;
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

  @media screen and (min-width: 768px) {
    margin: 0px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  height: 50px;
  background-color: #ffffff;
  width: 95%;

  > span {
    font-size: 12px;
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
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  margin: 20px;
  width: 95%;

  > h2 {
    font-size: 20px;
    margin: 10px 180px 0px 0px;
  }

  > div {
    width: 90%;
    max-width: 330px;
  }

  > input {
    border: 2px solid black;
    border-radius: 5px;
    width: 90%;
    height: 25px;
    margin: 20px 0px 0px 0px;
    padding: 5px;
  }

  > .buttonSubmit {
    width: 92%;
    max-width: 330px;
    margin: 20px 0px 20px 0px;
    border-radius: 5px;
    border: none;
    height: 30px;
    background-color: #219653;
    color: #ffffff;
  }

  > .buttonRegister {
    width: 92%;
    max-width: 330px;
    margin: 20px 0px 20px 0px;
    border-radius: 5px;
    border: none;
    height: 30px;
    background-color: #f5f5f5;
    color: #999999;
  }

  > span {
    color: #999999;
    width: 90%;
    max-width: 330px;

    font-size: 12px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
