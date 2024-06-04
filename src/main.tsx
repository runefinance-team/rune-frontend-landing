import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import { AppContextProvider } from "./providers/AppContext";
import LandingPageLayout from "./layouts/LandingPageLayout";
import Ecosystem from "./pages/Ecosystem";
import Community from "./pages/Community";
import FAQ from "./pages/FAQ";
import Docs from "./pages/Docs";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageLayout />}>
            <Route index element={<Home />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/community" element={<Community />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/docs" element={<Docs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
);
