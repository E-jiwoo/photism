import React from "react";
import * as S from "./style";
import qr from "../../assets/qr.svg";

const index = () => {
  return (
    <>
      <S.Container>
        <S.TitleSection>
          <S.Title_E>Upload a fictional character img</S.Title_E>
          <S.Title_k>가상의 인물 사진 업로드</S.Title_k>
        </S.TitleSection>
        <S.QR src={qr} alt="qr" />
        <S.TextSection>
          <S.Text_k>
            QR 인식 후 자신이 원하는 가상 인물 사진을 업로드해주세요.
          </S.Text_k>
          <S.Text_E>
            Recognition QR, upload the virtual person photo you want.
          </S.Text_E>
        </S.TextSection>
      </S.Container>
    </>
  );
};

export default index;
