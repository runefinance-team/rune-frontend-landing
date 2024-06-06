import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { AppContextProvider } from "./providers/AppContext";
import LandingPageLayout from "./layouts/LandingPageLayout";
import PageLoading from "./components/PageLoading";

const Home = React.lazy(() => import("./pages/Home"));
const Ecosystem = React.lazy(() => import("./pages/Ecosystem"));
const Community = React.lazy(() => import("./pages/Community"));
const FAQ = React.lazy(() => import("./pages/FAQ"));
const Docs = React.lazy(() => import("./pages/Docs"));

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<LandingPageLayout />}>
              <Route index element={<Home />} />
              <Route path="/ecosystem" element={<Ecosystem />} />
              <Route path="/community" element={<Community />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/docs" element={<Docs />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
);
