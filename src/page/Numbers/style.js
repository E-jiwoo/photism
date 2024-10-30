import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  gap: 30px;
`;

export const TitleSection = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
export const Title_E = styled.div`
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
`;
export const Title_k = styled.div`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
`;

export const NumberSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  padding-top: 20px;
`;

export const OutBox = styled.div`
  border: 1px solid black;
  padding: 5px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InBox = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  width: 70px;
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Plus = styled.div`
  color: #000;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 7px;
`;
export const Minus = styled.div`
  color: #000;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 7px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border: 1px solid black;
  border-radius: 20px;
`;

export const Number = styled.div`
  color: black;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
`;
export const AmountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 5px;=
  padding-bottom: 5px;
`;

export const Amount = styled.div`
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
`;
export const CheckSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
`;

export const CheckBox = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const CheckText = styled.div`
  color: black;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-top: 5px;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 62;
  background-color: black;
  padding: 7px 20px;
  border-radius: 10px;
`;

export const Text_k = styled.div`
  color: white;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
`;

export const Text_E = styled.div`
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
`;

export const Next = styled.img`
  position: fixed;
  right: 0;
  bottom: 0;
  margin-right: 100px;
  margin-bottom: 50px;
  width: 56px;
  height: 56px;
  cursor: pointer;
`;
