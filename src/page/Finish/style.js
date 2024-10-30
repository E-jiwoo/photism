import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Frame = styled.div`
  position: fixed;
  top: 50px;
  left: 700px;
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
