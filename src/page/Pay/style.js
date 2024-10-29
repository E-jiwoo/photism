import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  gap: 50px;
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

export const PaymentSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
`;

export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 350px;
  border: 1px solid black;
  border-radius: 20px;
  gap: 10px;
`;
export const Card = styled.img`
  width: 274px;
  height: 155px;
  padding-bottom: 20px;
`;
export const Cash = styled.img`
  width: 286px;
  height: 171px;
`;
export const Text_E = styled.div`
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
`;
export const Text_k = styled.div`
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
`;
