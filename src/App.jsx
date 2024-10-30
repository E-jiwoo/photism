import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Main from "./page/Main/index";
import Upload from "./page/Upload/index";
import Payment from "./page/Payment/index";
import Pay from "./page/Pay/index";
import Guide from "./page/Guide/index";
import Numbers from "./page/Numbers/index";
import Cam from "./page/Cam/index";
import Choose from "./page/Choose/index";
import Finish from "./page/Finish/index";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/numbers" element={<Numbers />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/pay" element={<Pay />}></Route>
          <Route path="/guide" element={<Guide />}></Route>
          <Route path="/cam" element={<Cam />}></Route>
          <Route path="/choose" element={<Choose />}></Route>
          <Route path="/finish" element={<Finish />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: pretendard;
    line-height: normal;
    font-style: normal;
    white-space: nowrap;
  }
`;

export default App;
