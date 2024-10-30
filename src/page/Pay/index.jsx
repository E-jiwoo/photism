import React, { useEffect } from "react";
import * as S from "./style";
import { useNavigate, useLocation } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { number, totalAmount } = location.state || {
    number: 2,
    totalAmount: 0,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/guide");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <S.Container>
        <S.TitleSection>
          <S.Title_E>Payment in progress</S.Title_E>
          <S.Title_k>결제 중</S.Title_k>
        </S.TitleSection>
        <S.Contain>
          <S.Subtitle_E>Needed</S.Subtitle_E>
          <S.Subtitle_K>필요 금액</S.Subtitle_K>
          <S.AmountBox>
            <S.Amount>₩{totalAmount.toLocaleString()}</S.Amount>
          </S.AmountBox>
          <S.TextSection>
            <S.Text_k>
              <b>결제 중입니다.</b>
            </S.Text_k>
            <S.Text_E>Payment</S.Text_E>
          </S.TextSection>
        </S.Contain>
      </S.Container>
    </>
  );
};

export default Index;
