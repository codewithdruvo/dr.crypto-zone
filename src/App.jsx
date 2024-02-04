import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import "./static/styles/main.css";
import Search from "./pages/Search";
import Crypto from "./pages/Crypto";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/" element={<Search />} />
        <Route path="/:id" element={<Crypto />} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
    </MainLayout>
  );
}

export default App;
