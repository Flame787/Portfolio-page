import { AppBar, Toolbar, Typography, Button, Switch } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { useEffect, useState } from "react";

export default function Navbar({ darkMode, handleThemeToggle }) {
  const navigate = useNavigate();

  // Nabvar-behavior when scrolling down:
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // možeš prilagoditi broj piksela
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // navigating to Projects section on Home page:
  const handleProjectsClick = () => {
    if (window.location.pathname === "/") {
      window.location.hash = "projects";
    } else {
      navigate("/#projects");
    }
  };

  return (
    // <AppBar position="static" color="primary">
    <AppBar
      position="sticky"
      color="primary"
      // sx={{ top: 0, transition: "all 0.3s ease", zIndex: 1100 }}
      sx={{
        top: 0,
        backdropFilter: "blur(10px)",
        backgroundColor: scrolled ? "primary.transparent" : "primary.main",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.7)" : "none",
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          height: scrolled ? 48 : 64,
          minHeight: "0 !important",
          transition: "height 0.3s ease",
          px: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontSize: scrolled ? "1rem" : "1.25rem",
            transition: "font-size 0.3s ease",
          }}
        >
          Dev Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        {/* <Button color="inherit" component={Link} to="#projects"> */}
        <Button color="inherit" onClick={handleProjectsClick}>
          Projects
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        {darkMode ? (
          <Brightness2Icon sx={{ mx: 1 }} />
        ) : (
          <Brightness7Icon sx={{ mx: 1 }} />
        )}
        <Switch
          checked={darkMode}
          onChange={handleThemeToggle}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#fff",
              "& + .MuiSwitch-track": {
                backgroundColor: "#000",
              },
            },
            "& .MuiSwitch-thumb": {
              backgroundColor: "#ffffff",
            },
            "& .MuiSwitch-track": {
              backgroundColor: "#ccc", // when unchecked
            },
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
