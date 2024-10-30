import React from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const { photos } = location.state || { photos: [] };

  return (
    <>
      <S.Container>
        <S.Frame>
          <S.PhotoSection>
            {photos.map((photo, index) => (
              <S.Photo
                key={index}
                style={{
                  backgroundImage: photo ? `url(${photo})` : "none",
                  backgroundColor: photo ? "transparent" : "white",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </S.PhotoSection>
        </S.Frame>
      </S.Container>
    </>
  );
};

export default Index;
