import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import axios from "axios";
import overlay from "./overlay.png";

const SERVER_URL = "http://172.30.1.95:8796/upload";

const Shot = () => {
  const [isCaptured, setIsCaptured] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [overlayPositionX, setOverlayPositionX] = useState(0); // 오버레이 이미지의 x축 위치
  const [overlayPositionY, setOverlayPositionY] = useState(0); // 오버레이 이미지의 y축 위치
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const countdownRef = useRef(null);
  const overlayImageRef = useRef(new Image());
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    overlayImageRef.current.src = overlay;

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

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setOverlayPositionX((prev) => Math.max(prev - 10, -230)); // 왼쪽으로 이동
    } else if (event.key === "ArrowRight") {
      setOverlayPositionX((prev) => Math.min(prev + 10, 23)); // 오른쪽으로 이동
    } else if (event.key === "ArrowUp") {
      setOverlayPositionY((prev) => Math.max(prev - 10, -20)); // 위로 이동
    } else if (event.key === "ArrowDown") {
      setOverlayPositionY((prev) => Math.min(prev + 10, 270)); // 아래로 이동
    }
  };

  useEffect(() => {
    drawOverlay();

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [overlayPositionX, overlayPositionY]);

  const drawOverlay = () => {
    const canvasElement = canvasRef.current;
    const videoElement = videoRef.current;
    const overlayImage = overlayImageRef.current;

    if (canvasElement && videoElement && overlayImage) {
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

      const overlayWidth = canvasElement.width * 0.3;
      const overlayHeight =
        (overlayImage.height / overlayImage.width) * overlayWidth;
      const overlayX =
        (canvasElement.width - overlayWidth) / 2 + overlayPositionX;
      const overlayY = 20 + overlayPositionY;

      context.drawImage(
        overlayImage,
        overlayX,
        overlayY,
        overlayWidth,
        overlayHeight
      );

      requestAnimationFrame(drawOverlay);
    }
  };

  const captureImage = async () => {
    const canvasElement = canvasRef.current;

    if (canvasElement) {
      const imageData = canvasElement.toDataURL("image/png");
      setCapturedImage(imageData);
      setIsCaptured(true);

      const base64Image = imageData.split(",")[1];
      const blob = await (
        await fetch(`data:image/png;base64,${base64Image}`)
      ).blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "captured_image.png";
      link.click();

      const formData = new FormData();
      formData.append("picture", blob, "captured_image.png");

      try {
        const response = await axios.post(SERVER_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Image uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleRetake = () => {
    setIsCaptured(false);
    setCountdown(10);
  };

  return (
    <S.Container>
      <video ref={videoRef} autoPlay style={{ display: "none" }} />
      <S.Canvas
        ref={canvasRef}
        style={{ display: isCaptured ? "none" : "block" }}
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
          <button onClick={handleRetake}>재촬영</button>
        </div>
      )}
    </S.Container>
  );
};

export default Shot;
