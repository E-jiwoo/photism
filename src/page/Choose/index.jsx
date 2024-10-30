import React, { useState } from "react";
import * as S from "./style";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";

const Index = () => {
  const [photos, setPhotos] = useState([null, null, null, null]);
  const [photoCount, setPhotoCount] = useState(0);

  const handleImageClick = (imgSrc) => {
    const updatedPhotos = [...photos];
    const firstEmptyIndex = updatedPhotos.findIndex((photo) => photo === null);
    const existingIndex = updatedPhotos.findIndex((photo) => photo === imgSrc);

    if (existingIndex !== -1) {
      updatedPhotos[existingIndex] = null;
      setPhotos(updatedPhotos);
      setPhotoCount((prevCount) => Math.max(prevCount - 1, 0));
    } else if (firstEmptyIndex !== -1 && photoCount < 4) {
      updatedPhotos[firstEmptyIndex] = imgSrc;
      setPhotos(updatedPhotos);
      setPhotoCount((prevCount) => Math.min(prevCount + 1, 4));
    }
  };

  const handlePhotoClick = (photo) => {
    if (photo) {
      handleImageClick(photo);
    }
  };

  return (
    <>
      <S.Container>
        <S.ImgSection>
          <S.Image>
            <S.Img
              src={image1}
              alt="image1"
              onClick={() => handleImageClick(image1)}
            />
            <S.Img
              src={image2}
              alt="image2"
              onClick={() => handleImageClick(image2)}
            />
          </S.Image>
          <S.Image>
            <S.Img
              src={image3}
              alt="image3"
              onClick={() => handleImageClick(image3)}
            />
            <S.Img
              src={image4}
              alt="image4"
              onClick={() => handleImageClick(image4)}
            />
            <S.Box>
              <S.Title_E>Number of Photos</S.Title_E>
              <S.Title_k>수량 선택</S.Title_k>
              <S.Number>{photoCount} / 4</S.Number>
            </S.Box>
          </S.Image>
        </S.ImgSection>
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
                onClick={() => handlePhotoClick(photo)}
              />
            ))}
          </S.PhotoSection>
        </S.Frame>
      </S.Container>
    </>
  );
};

export default Index;
