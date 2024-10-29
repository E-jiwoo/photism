import React from "react";
import * as S from "./style";

const index = () => {
  return (
    <>
      <S.Container>
        <S.TextSection>
          <S.Text_k>
            촬영이 곧 시작됩니다
            <br />
            우측에 있는 <b>리모콘</b>을 잡고 준비해주세요.
            <br />
            촬영횟수는 <b>총 4회입니다.</b>
          </S.Text_k>
          <S.Text_E>
            Get ready for a shoot!
            <br /> Hold the <b>remote control</b> on the right side
            <br /> You have <b> 4 times</b>
          </S.Text_E>
        </S.TextSection>
      </S.Container>
    </>
  );
};

export default index;
