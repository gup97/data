import React from "react";
import Page from "pages";
import SubmitPage from "./pages/SubmitPage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DatailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/list/:id" element={<DetailPage />} />
        <Route path="submit" element={<SubmitPage />} />
        {/* <Route path="list" element={<ListTap />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
