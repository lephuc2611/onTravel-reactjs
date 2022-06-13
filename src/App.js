import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Hotels from "./pages/home/Hotels";
import Agent from "./pages/agent/Agent";
import Listing from "./pages/listing/Listing";
import Pricing from "./pages/pricing/Pricing";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import "./index.css";
import Signin from "./pages/signin/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hotels />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/" element={<Navigate to="/hotels" replace />}></Route>
          <Route path="/agent" element={<Agent />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
