import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import QrFrame from "../../assets/qr-frame.svg";

const QrReader = () => {
  // References for video and QR box elements
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);

  // State to hold scanned result
  const [scannedResult, setScannedResult] = useState("");
  const [qrOn, setQrOn] = useState(true);

  // Camera access test
  useEffect(() => {
    if (videoEl.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoEl.current.srcObject = stream;
          console.log("Camera stream started successfully");
          setQrOn(true);
        })
        .catch((err) => {
          console.error("Error accessing camera:", err);
          setQrOn(false);
        });
    }
  }, []);

  // Display an alert if camera access fails
  useEffect(() => {
    if (!qrOn) {
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and reload."
      );
    }
  }, [qrOn]);

  return (
    <QrReaderWrapper>
      {/* Video Element for Camera Feed */}
      <Video ref={videoEl} autoPlay playsInline muted></Video>
      <QrBox ref={qrBoxEl}>
        <QrFrameImage src={QrFrame} alt="Qr Frame" />
      </QrBox>

      {/* Show Data Result if scan is successful */}
      {scannedResult && (
        <ResultText>Scanned Result: {scannedResult}</ResultText>
      )}
    </QrReaderWrapper>
  );
};

// Styled Components
const QrReaderWrapper = styled.div`
  width: 430px;
  height: 100vh;
  margin: 0 auto;
  position: relative;

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const QrBox = styled.div`
  width: 100% !important;
  position: absolute;
  left: 0 !important;
`;

const QrFrameImage = styled.img`
  position: absolute;
  width: 256px;
  height: 256px;
  left: 50%;
  bottom: 20%; /* Adjusted to move the scan area higher */
  transform: translateX(-50%) translateY(-50%);
`;

const ResultText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
  color: white;
`;

export default QrReader;
