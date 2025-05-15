import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Grid, Box } from "@mui/material";
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
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mt: 6, mb: 4, textAlign: "center" }}
        fontFamily={"Kenfolg Serif"}
      >
        {/* gutterBottom - adds margin under h3-element */}
        {/* sx={{ mt: 6 }} - adding style: margin-top: 6 x 8px = 48px */}
        {/* Hi, I'm <span sx={{ color: "primary.main" }}>xy</span> */}
        Hi, I'm{" "}
        <Box component="span" sx={{ color: "primary.title" }}>
          Marina
        </Box>
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "nowrap",
          // gap: 6,
        }}
        direction={{ xs: "column", sm: "column", md: "row" }}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ flexBasis: "50%", ml: 8, mr: 6, mt: 1 }}>
          <img
            src="/723.png"
            alt="code"
            style={{
              width: "100%",
              maxWidth: "450px",
              borderRadius: "8px",
              display: "inline-block",
              margin: "0 auto",
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ flexBasis: "50%", ml: 6, mr: 8, border: "1px solid #4CC9FE", borderRadius: 4, p: 4 }}>
          <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
            I started learning programming three years ago and developed a deep
            enthusiasm for front-end development.
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
            I'm passionate about learning, solving problems, and building
            responsive, user-friendly and visually engaging web experiences.
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
            In my projects, I primarily work with React and vanilla JavaScript,
            frequently integrating APIs to enhance interactivity.
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
            I enjoy working with modern libraries like React Router and Redux,
            as well as frameworks like Bootstrap, Express.js, and tools such as
            Git, GitHub, SCSS, Material-UI (MUI), Webpack, Vite and Jira.
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
            I believe in following best practices, such as writing modular and
            maintainable code, to build scalable apps that
            are easy to manage even as the project grows.
          </Typography>
        </Grid>
      </Grid>

      {/* Projects section */}
      <Projects />
    </Container>
  );
}
