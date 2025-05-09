import { AppBar, Toolbar, Typography, Button, Switch } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";

export default function Navbar({ darkMode, handleThemeToggle }) {
  const navigate = useNavigate();

  //   const scrollToProjects = () => {
  //     const element = document.getElementById("projects");
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  const handleProjectsClick = () => {
    if (window.location.pathname === "/") {
      window.location.hash = "projects";
    } else {
      navigate("/#projects");
    }
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dev Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        {/* <Button color="inherit" component={Link} to="#projects"> */}
        {/* <Button color="inherit" component="a" href="#projects"> */}
        {/* <Button
          color="inherit"
          onClick={() => {
            if (window.location.pathname === "/") {
              scrollToProjects(); 
            } else {
              navigate("/#projects");
            }
          }}
        > */}

        <Button color="inherit" onClick={handleProjectsClick}>
          {/* <Button color="inherit" component={Link} to="/#projects"> */}
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
        <Switch checked={darkMode} onChange={handleThemeToggle} />
      </Toolbar>
    </AppBar>
  );
}
