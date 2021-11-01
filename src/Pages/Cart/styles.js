import styled from "styled-components";

export const UlMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0px;
  width: 80%;
  height: 300px;
  overflow: auto;
  max-width: 400px;

  > li {
    width: 90%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    list-style: none;
    margin-bottom: 20px;
    border: 3px solid #e0e0e0;
    border-radius: 5px;

    > div h3 {
      font-size: 12px;
      margin: 10px 0px 10px 0px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    :hover {
      border: 3px solid #27ae60;
      transition: 0.6s;

      > button {
        background-color: #27ae60;
        transition: 0.6s;
      }
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
      width: 90px;
      height: 70px;
    }

    > .buttonDelete {
      margin: 10px;
    }
  }

  > button {
    width: 92%;
    max-width: 330px;
    margin: 20px 0px 20px 0px;
    border-radius: 5px;
    border: none;
    height: 30px;
    background-color: #f5f5f5;
    color: #999999;
  }
`;

export const BoxQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 20px;
  width: 60px;

  background-color: #e0e0e0;
  padding: 2px;

  > svg {
    background-color: #e0e0e0;
    margin: 0 auto;
    color: red;
    width: 12px;
  }

  > p {
    font-size: 10px;
    background-color: #f5f5f5;
    padding: 5px 10px 5px 10px;
  }
`;

export const InitialBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 20%;

  background-color: #27ae60;

  > svg {
    width: 20px;
    height: 20px;
    color: #f5f5f5;
  }

  > h3 {
    color: #f5f5f5;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;

  > p {
    color: #333333;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 20px;
  }
`;

export const Linha = styled.div`
  width: 80%;
  height: 2px;
  background-color: #e0e0e0;
  border-radius: 20px;
  margin-bottom: 15px;
`;
