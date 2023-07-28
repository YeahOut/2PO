import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Routes/Layout";
import { Home } from "./page/Home";
import { Behind } from "./page/Behind";
import { Rank } from "./page/Rank";
import { BehindDetail } from "./page/BehindDetail";
import { Transaction } from "./page/Transaction";

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
          <Route path="/transaction" element={<Transaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
