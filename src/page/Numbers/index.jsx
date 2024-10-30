import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import next from "../../assets/next.svg";

const Index = () => {
  const [number, setNumber] = useState(2);
  const amount = 3000;

  const navigate = useNavigate();

  const Plus = () => {
    setNumber((prevNumber) => prevNumber + 2);
  };

  const Minus = () => {
    setNumber((prevNumber) => (prevNumber > 2 ? prevNumber - 2 : prevNumber));
  };

  const handleNext = () => {
    const totalAmount = amount * number;
    navigate("/pay", { state: { number, totalAmount } });
  };

  return (
    <>
      <S.Container>
        <S.TitleSection>
          <S.Title_E>Number of Photos</S.Title_E>
          <S.Title_k>수량 선택</S.Title_k>
        </S.TitleSection>
        <S.NumberSection>
          <S.OutBox onClick={Plus}>
            <S.InBox>
              <S.Plus>+</S.Plus>
            </S.InBox>
          </S.OutBox>
          <S.Box>
            <S.Number>
              <b>{number}</b>
            </S.Number>
          </S.Box>
          <S.OutBox onClick={Minus}>
            <S.InBox>
              <S.Minus>-</S.Minus>
            </S.InBox>
          </S.OutBox>
        </S.NumberSection>
        <S.AmountBox>
          <S.Amount>₩{(amount * number).toLocaleString()}</S.Amount>
        </S.AmountBox>
        <S.CheckSection>
          <S.CheckBox />
          <S.CheckText>보유 중인 쿠폰이 있는 경우 체크해 주세요</S.CheckText>
        </S.CheckSection>
        <S.TextSection>
          <S.TextBox>
            <S.Text_k>우측 하단 다음 버튼을 눌러주세요</S.Text_k>
          </S.TextBox>
          <S.Text_E>Click the Next button at the bottom right corner</S.Text_E>
        </S.TextSection>
        <S.Next onClick={handleNext} src={next} alt="next" />
      </S.Container>
    </>
  );
};

export default Index;
