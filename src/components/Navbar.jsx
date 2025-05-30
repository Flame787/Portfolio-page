import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar({ darkMode, handleThemeToggle }) {
  const location = useLocation();

  const navigate = useNavigate();

  // Nabvar-behavior when scrolling down:
  const [scrolled, setScrolled] = useState(false);

  // state for tracking if mobile view:
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  useEffect(() => {
    if (location.hash === "/") {
      const el = document.getElementById("home");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleHomeClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/", { replace: true });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
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
          height: scrolled ? 56 : 64,
          minHeight: "0 !important",
          transition: "height 0.3s ease",
          px: { xs: 1, sm: 2 },
        }}
      >
        <img
          // src={darkMode ? "/logo3.png" : "/logo7.png"}
          // src="/wave3.png"
          src="/Marina-transparent.png"
          alt="logo"
          className="my-logo"
          style={{
            // width: "4%",
            // width: "6%",
            minWidth: "60px",
            height: "auto",

            // borderRadius: "16px",
            borderRadius: "4px",
            display: "inline-block",
            margin: "0 4px",
          }}
        ></img>
        <Typography
          variant="h6"
          fontFamily={"TheSeasons-Regular, serif"}
          sx={{
            ml: 3.5,
            flexGrow: 1,
            fontSize: scrolled ? "1.1rem" : "1.25rem",
            transition: "font-size 0.3s ease",
            letterSpacing: "0.03em",
          }}
        >
          Developer Portfolio
        </Typography>

        {/* Hamburger Menu, if mobile resolution: */}
        <IconButton
          sx={{ display: { xs: "block", sm: "none" }, color: "white" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          <List>
            <ListItem
              button
              component={Link}
              to="/"
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText
                primary="Home"
                sx={{ color: "primary.title" }}
                primaryTypographyProps={{
                  fontWeight: "bold",
                }}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                handleProjectsClick();
                setMobileOpen(false);
              }}
            >
              <ListItemText
                primary="Projects"
                sx={{ color: "primary.title" }}
                primaryTypographyProps={{
                  fontWeight: "bold",
                }}
              />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/contact"
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText
                primary="Contact"
                sx={{ color: "primary.title" }}
                primaryTypographyProps={{
                  fontWeight: "bold",
                }}
              />
            </ListItem>
          </List>
        </Drawer>

        <Button
          color="inherit"
          component={Link}
          onClick={handleHomeClick}
          to="/"
          sx={{
            display: { xs: "none", sm: "inline-block" },
            // fontFamily: "TheSeasons-Bold, serif",
            // fontFamily: "Cardo-Bold, serif",
            fontFamily: "Marcellus-Regular, serif",
            textTransform: "none",
            fontSize: "1.1rem",
            // letterSpacing: "0.05em",
            borderBottom: "1px solid transparent",
            "&:hover": {
              borderBottom: "3px solid rgba(76, 201, 254, 0.4)",
            },
          }}
        >
          Home
        </Button>

        {/* <Button color="inherit" component={Link} to="#projects"> */}
        <Button
          color="inherit"
          onClick={handleProjectsClick}
          sx={{
            display: { xs: "none", sm: "inline-block" },
            // fontFamily: "TheSeasons-Bold, serif",
            fontFamily: "Marcellus-Regular, serif",
            textTransform: "none",
            fontSize: "1.1rem",
            // letterSpacing: "0.05em",
            borderBottom: "1px solid transparent",
            "&:hover": {
              borderBottom: "3px solid rgba(76, 201, 254, 0.4)",
            },
          }}
        >
          Projects
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contact"
          sx={{
            display: { xs: "none", sm: "inline-block" },
            // fontFamily: "TheSeasons-Bold, serif",
            fontFamily: "Marcellus-Regular, serif",
            textTransform: "none",
            fontSize: "1.1rem",
            // letterSpacing: "0.05em",
            borderBottom: "1px solid transparent",
            "&:hover": {
              borderBottom: "3px solid rgba(76, 201, 254, 0.4)",
            },
          }}
        >
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
