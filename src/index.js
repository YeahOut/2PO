import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Routes/Layout";
import { Home } from "./page/Home";
import { Behind } from "./page/Behind";
import { Rank } from "./page/Rank";
import { BehindDetail } from "./page/BehindDetail";
import { Progress } from "./page/Progress";
import { ProgressDetail } from "./page/ProgressDetail";
import { Waiting } from "./page/Waiting";
import { WaitingDetail } from "./page/WaitingDetail";
import { Transaction } from "./page/Transaction";
import { Token } from "./page/Token";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/behind" element={<Behind />}></Route>
          <Route path="/behind/:id" element={<BehindDetail />}></Route>
          <Route path="/rank" element={<Rank />}></Route>
          <Route path="/waiting" element={<Waiting />}></Route>
          <Route path="/waiting/:id" element={<WaitingDetail />}></Route>
          <Route path="/progress" element={<Progress />}></Route>
          <Route path="/progress/:id" element={<ProgressDetail />}></Route>
          <Route path="/token" element={<Token />}></Route>
          <Route path="/transaction" element={<Transaction />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
