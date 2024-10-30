import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import axios from "axios";

const SERVER_URL = "http://172.30.1.95:8796/upload";

const Shot = () => {
  const [isCaptured, setIsCaptured] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const countdownRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });

    if (countdown > 0) {
      countdownRef.current = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownRef.current);
    };
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0) {
      captureImage();
    }
  }, [countdown]);

  const captureImage = async () => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;

    if (videoElement && canvasElement) {
      const context = canvasElement.getContext("2d");
      canvasElement.width = 640;
      canvasElement.height = 480;

      context.drawImage(
        videoElement,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );
      const imageData = canvasElement.toDataURL("image/png");
      setCapturedImage(imageData);
      setIsCaptured(true);

      // Base64 이미지를 Blob으로 변환
      const base64Image = imageData.split(",")[1];
      const blob = await (
        await fetch(`data:image/png;base64,${base64Image}`)
      ).blob();

      // FormData 객체 생성
      const formData = new FormData();
      formData.append("picture", blob, "captured_image.png"); // 'file' 필드에 Blob 추가

      // FastAPI 서버에 이미지 전송
      try {
        const response = await axios.post(SERVER_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data", // FormData를 사용할 때 Content-Type 설정
          },
        });
        console.log("Image uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <S.Container>
      <S.Video
        ref={videoRef}
        autoPlay
        style={{ display: isCaptured ? "none" : "block" }}
      />
      <S.Canvas
        ref={canvasRef}
        style={{ display: isCaptured ? "block" : "none" }}
      />
      {!isCaptured && (
        <S.Countdown>
          <b>{String(countdown).padStart(2, "0")}</b>
        </S.Countdown>
      )}
      {isCaptured && (
        <div>
          <h3>촬영한 이미지:</h3>
          <img src={capturedImage} alt="Captured" width="100" />
          <button onClick={() => setIsCaptured(false)}>재촬영</button>
        </div>
      )}
    </S.Container>
  );
};

export default Shot;
