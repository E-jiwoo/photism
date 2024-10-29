import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
`;

export const Img = styled.img`
  position: relative;
  right: 0px;
  max-width: 37%;
  height: auto;
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ColumnLine = styled.div`
  position: relative;
  left: 470px;
  height: 1000px;
  width: 1px;
  background-color: #ccc;
  z-index: 2;
`;
export const RowLine = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 550px;
  z-index: 3;
`;
export const Line = styled.div`
  height: 1px;
  width: 1000px;
  background-color: #ccc;
`;
export const Circle = styled.div`
  position: relative;
  right: 800px;
  width: 550px;
  height: 550px;
  flex-shrink: 0;
  border-radius: 550px;
  border: 1px solid #ccc;
  z-index: 0;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text1 = styled.div``;
export const Text2 = styled.div``;
