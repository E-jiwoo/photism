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

export const QR = styled.img`
  position: relative;
  max-width: 18%;
  height: auto;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-top: 20px;
`;

export const Text_k = styled.div`
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
`;

export const Text_E = styled.div`
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
`;
