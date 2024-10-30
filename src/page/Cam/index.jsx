import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

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

  const captureImage = () => {
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

      const link = document.createElement("a");
      link.href = imageData;
      link.download = "captured_image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
