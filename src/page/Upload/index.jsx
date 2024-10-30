import { useEffect, useRef, useState } from 'react';

import QrScanner from 'qr-scanner';
import styled from 'styled-components';

import QrFrame from '../../assets/qr-frame.svg';

const QrReader = () => {
  
  // References for video and QR box elements
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);

  // State to hold scanned result
  const [scannedResult, setScannedResult] = useState("");
  const [qrOn, setQrOn] = useState(true);

  // Success
  const onScanSuccess = (result) => {
    // 🖨 Print the "result" to browser console.
    console.log(result);
    // ✅ Handle success.
    // 😎 You can do whatever you want with the scanned result.
    setScannedResult(result?.data);
  };

  // Fail
  const onScanFail = (err) => {
    // 🖨 Print the "err" to browser console.
    console.log(err);
  };

  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      // 👉 Instantiate the QR Scanner
      scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
        onDecodeError: onScanFail,
        // 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
        preferredCamera: "environment",
        // 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
        highlightScanRegion: true,
        // 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
        highlightCodeOutline: true,
        // 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
        overlay: qrBoxEl?.current || undefined,
      });

      // 🚀 Start QR Scanner
      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    

    // 🧹 Clean up on unmount.
    // 🚨 This removes the QR Scanner from rendering and using camera when it is closed or removed from the UI.
    return () => {
      if (!videoEl?.current) {
        scanner?.current?.stop();
      }
    };
  }, []);

  console.log(scanner)


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
