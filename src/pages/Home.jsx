import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Grid } from "@mui/material";
import Projects from "../components/Projects";

export default function Home() {
  // enable scrolling to the Projects-section from other pages, like Contact:
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#projects") {
      const el = document.getElementById("projects");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Container>
      <Typography variant="h3" gutterBottom sx={{ mt: 6 }}>
        {/* gutterBottom - adds margin under h3-element */}
        {/* sx={{ mt: 6 }} - adding style: margin-top: 6 x 8px = 48px */}
        Welcome to my portfolio
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center", flexWrap: "nowrap", gap: 6 }}
        direction={{ xs: "column", sm: "column", md: "row" }}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} >
          <img
            src="/111.jpg"
            alt="avatar developer"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "8px",
              display: "inline-block",
              margin: "0 auto",
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} sx={{  flexBasis: "70%" }}>
          <Typography sx={{ marginBottom: 1 }}>
            Hi, my name is xy. I started learning programming about three years
            ago and developed a deep enthusiasm for front-end development.
          </Typography>
          <Typography sx={{ marginBottom: 1 }}>
            I'm passionate about learning, solving problems, and building
            responsive, user-friendly and visually engaging web experiences.
          </Typography>
          <Typography sx={{ marginBottom: 1 }}>
            In my projects, I primarily work with React and vanilla JavaScript,
            frequently integrating APIs to enhance interactivity.
          </Typography>
          <Typography sx={{ marginBottom: 1 }}>
            I enjoy working with modern libraries like React Router and Redux,
            as well as frameworks like Bootstrap, Express.js, and tools such as Git,
            GitHub, SCSS, Material-UI (MUI), Webpack, Vite and Jira.
          </Typography>
          <Typography sx={{ marginBottom: 1 }}>
            I believe in following best practices, such as writing modular and
            maintainable code, which helps to build scalable applications that
            are easy to manage even as the project grows.
          </Typography>
        </Grid>
      </Grid>

      {/* Projects section */}
      <Projects />
    </Container>
  );
}
