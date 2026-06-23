import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;