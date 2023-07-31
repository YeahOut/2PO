import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Routes/Layout";
import {
  Home,
  Behind,
  Rank,
  BehindDetail,
  Progress,
  ProgressDetail,
  Waiting,
  WaitingDetail,
  Transaction,
  Token,
  Inquiry,
  NFT,
  Throw,
  Wallet
} from "./page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/behind" element={<Behind />} />
          <Route path="/behind/:id" element={<BehindDetail />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/waiting" element={<Waiting />} />
          <Route path="/waiting/:id" element={<WaitingDetail />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/progress/:id" element={<ProgressDetail />} />
          <Route path="/token" element={<Token />} />
          <Route path="/throw" element={<Throw />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/inquiry" element={<Inquiry />}/>
          <Route path="/donate" element={<NFT />}/>
          <Route path="/wallet" element={<Wallet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
