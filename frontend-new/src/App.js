import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Plants from "./pages/Plants";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PlantDetails from "./pages/PlantDetails";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar */}
        <nav
          style={{
            background: "#1b4332",
            padding: "15px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "white", margin: 0 }}>
            🌱 Green Plantation
          </h2>

          <div>
            <Link
              to="/"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              Home
            </Link>

            <Link
              to="/about"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              About
            </Link>

            <Link
              to="/plants"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              Plants
            </Link>

            <Link
              to="/plantdetails"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              Plant Details
            </Link>

            <Link
              to="/chatbot"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              AI Chatbot
            </Link>

            <Link
              to="/contact"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plantdetails" element={<PlantDetails />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;