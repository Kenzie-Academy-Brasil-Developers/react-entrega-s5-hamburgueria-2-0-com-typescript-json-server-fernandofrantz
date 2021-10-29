import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  text-align: center;
  margin-top: 10px;
  > .titleBurguer {
    font-size: 25px;
  }
  > .titleKenzie {
    color: red;
    font-size: 18px;
  }
`;

export const SectionMenu = styled.section``;

export const UlMenu = styled.ul`
  display: flex;
  flex-direction: row;
  overflow: auto;
  align-items: center;
  padding: 0px;
  width: 270px;
  height: 300px;

  > li {
    width: 200px;
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style: none;
    margin-right: 30px;
    border: 3px solid #e0e0e0;
    border-radius: 5px;
    padding: 0px 0px 10px 0px;

    :hover {
      border: 3px solid #27ae60;
      transition: 0.6s;

      > button {
        background-color: #27ae60;
        transition: 0.6s;
      }
    }

    > h3,
    span,
    button {
      margin: 15px 0px 0px 15px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
    }

    > button {
      margin-bottom: 15px;
      padding: 5px;
      border-radius: 5px;
      border: none;

      :hover {
        border: 2px solid yellowgreen;
        transition: 0.1s;
      }
    }

    > img {
      width: 150px;
      height: 160px;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  height: 70px;
  background-color: #ffffff;
  width: 90%;

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
    width: 80px;
    height: 30px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
