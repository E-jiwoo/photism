import styled from "styled-components";

export const QRReader = styled.div`
  width: 430px;
  height: 100vh;
  margin: 0 auto;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .qr-box {
    width: 100% !important;
    left: 0 !important;
  }

  .qr-frame {
    position: absolute;
    fill: none;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;
