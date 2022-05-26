import React from "react";
import SubmitPage from "pages/SubmitPage";
import ListTap from "./pages/ListPage";
import Page from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "pages/DetailPage";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/list" element={<ListTap />}></Route>
        <Route path="/list/:id" element={<DetailPage />} />

        <Route path="submit" element={<SubmitPage />} />
        {/* <Route path="list" element={<ListTap />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
