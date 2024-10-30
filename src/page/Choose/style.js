import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImgSection = styled.div`
  position: fixed;
  top: 55px;
  left: 160px;
  display: flex;
  flex-direction: row;
  gap: 3px;
`;
export const Image = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
export const Img = styled.img`
  cursor: pointer;
`;
export const Box = styled.div`
  width: 303px;
  height: 202px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const Title_E = styled.div`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;
export const Title_k = styled.div`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

export const Number = styled.div`
  color: #000;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
`;
export const Frame = styled.div`
  position: fixed;
  top: 50px;
  right: 300px;
  width: 210px;
  height: 626.16px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhotoSection = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Photo = styled.div`
  width: 172px;
  height: 139px;
  background-color: white;
  cursor: pointer;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
