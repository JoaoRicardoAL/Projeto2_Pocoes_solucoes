import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;