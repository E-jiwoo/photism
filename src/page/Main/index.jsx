import React from "react";
import * as S from "./style";
import main from "../../assets/main.svg";
import text from "../../assets/main_text.svg";
const index = () => {
  return (
    <>
      <S.Container>
        <S.Background>
          <S.ColumnLine />
          <S.RowLine>
            <S.Line />
            <S.Line />
          </S.RowLine>
          <S.Circle />
          <S.Logo>
            <S.Text1 src={text} alt="text"></S.Text1>
          </S.Logo>
        </S.Background>
      </S.Container>
    </>
  );
};

export default index;
