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
import TopCryptoVolume24 from "./components/crypto/cyptovolume24.top";
import TopCryptoMarketCap from "./components/crypto/cryptomarketcap.top";
import CryptoCompare from "./components/crypto/crypto.compare";
import { ComparisonProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ComparisonProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<App />} />
          <Route path="/crypto/:id" element={<CryptoDetail />} />
          <Route path="/top-crypto-volume24" element={<TopCryptoVolume24 />} />
          <Route
            path="/top-crypto-marketCap"
            element={<TopCryptoMarketCap />}
          />
          <Route path="/crypto-compare" element={<CryptoCompare />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ComparisonProvider>
  </React.StrictMode>
);

reportWebVitals();
