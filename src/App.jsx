import React from "react";
import Page from "pages";
import SubmitPage from "./pages/SubmitPage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import DeletePage from "./pages/DeletePage";
import EditPage from "pages/EditPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { InputDate } from "components/InputDate/index.jsx";
import { MapListContainer } from "container/MapContainer";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/list/:id" element={<DetailPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/delete/:id" element={<DeletePage />} />
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
