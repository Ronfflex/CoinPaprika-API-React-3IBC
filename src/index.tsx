import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./components/errors/NotFound";
import CryptoDetail from "./components/crypto/crypto.detail";
import TopCryptoVolume from "./components/crypto/cyptovolume24.top";
import TopCryptoVolume24 from "./components/crypto/cyptovolume24.top";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<App />} />
        <Route path="/crypto/:id" element={<CryptoDetail />} />
        <Route path="/top-crypto-volume24" element={<TopCryptoVolume24 />} />
        <Route path="/top-crypto-volume" element={<TopCryptoVolume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
