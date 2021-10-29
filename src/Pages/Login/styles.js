import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 80%;
`;

export const Title = styled.div`
  display: flex;
  text-align: center;

  margin-right: 90px;

  > .titleBurguer {
    font-size: 25px;
  }
  > .titleKenzie {
    color: red;
    margin-left: 10px;
    font-size: 18px;
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
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  margin: 20px;
  width: 100%;

  > h2 {
    font-size: 20px;
    margin: 10px 180px 0px 0px;
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
    margin: 20px 0px 20px 0px;
    border-radius: 5px;
    border: none;
    height: 30px;
    background-color: #219653;
    color: #ffffff;
  }

  > .buttonRegister {
    width: 92%;
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
    font-size: 12px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
