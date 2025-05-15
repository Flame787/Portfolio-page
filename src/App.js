import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider, CssBaseline } from "@mui/material";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const handleThemeToggle = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "rgb(0, 15, 33)", 
            backgroundImage: `
        radial-gradient(circle at 22% 27%, rgba(42, 181, 246, 0.15), transparent 9%),
        radial-gradient(circle at 17% 79%, rgba(42, 181, 246, 0.15), transparent 15%),
        radial-gradient(circle at 70% 60%, rgba(29, 167, 231, 0.25), transparent 20%),
        radial-gradient(circle at 50% 80%, rgba(31, 142, 193, 0.2), transparent 25%),
        radial-gradient(circle at 80% 20%, rgba(19, 145, 203, 0.15), transparent 10%),
        radial-gradient(circle at 40% 40%, rgba(16, 115, 161, 0.2), transparent 15%)
      `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",

            minHeight: "100vh",
            margin: 0,
            padding: 0,
          },
        }}
      />
      <Router>
        {/* Flex layout wrapper */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar darkMode={darkMode} handleThemeToggle={handleThemeToggle} />
          {/* Main content expands to fill space */}
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
