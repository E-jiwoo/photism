import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import card from "../../assets/card.svg";
import cash from "../../assets/cash.svg";

const index = () => {
  const navigate = useNavigate();
  const TogoPay = () => {
    navigate("/pay");
  };
  return (
    <>
      <S.Container>
        <S.TitleSection>
          <S.Title_E>Select payment method</S.Title_E>
          <S.Title_k>결제 수단 선택</S.Title_k>
        </S.TitleSection>
        <S.PaymentSection>
          <S.PaymentBox onClick={TogoPay}>
            <S.Card src={card} alt="card"></S.Card>
            <S.Text_E>credit card</S.Text_E>
            <S.Text_k>카드</S.Text_k>
          </S.PaymentBox>
          <S.PaymentBox onClick={TogoPay}>
            <S.Cash src={cash} alt="card"></S.Cash>
            <S.Text_E>cash</S.Text_E>
            <S.Text_k>현금</S.Text_k>
          </S.PaymentBox>
        </S.PaymentSection>
      </S.Container>
    </>
  );
};

export default index;
