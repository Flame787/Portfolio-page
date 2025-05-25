import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Projects from "../components/Projects";

export default function Home({ darkMode }) {
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
        sx={{ mt: 8, mb: 4, textAlign: "center" }}
        fontFamily={"Kenfolg Serif"}
      >
        {/* gutterBottom - adds margin under h3-element */}
        {/* sx={{ mt: 6 }} - adding style: margin-top: 6 x 8px = 48px */}
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
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{ flexBasis: "50%", ml: 6, mr: 6, mt: 0, mb: 0, lineHeight: 0 }}
        >
          <img
            src={darkMode ? "/732.png" : "/730.png"}
            alt="code"
            style={{
              width: "109%",
              // maxWidth: "450px",
              borderRadius: "16px",
              display: "inline-block",
              margin: "0 auto",
              boxShadow: "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{
            flexBasis: "50%",
            ml: 6,
            mr: 6,
            // border: "1px solid #4CC9FE",
            borderRadius: 4,
            border: "1px solid transparent",
              "&:hover": {
                border: "1.3px solid rgba(76, 201, 254, 0.4)",
              },
            p: 3.7,
            boxShadow:
              "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
          }}
        >
          <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
            My programming journey began three years ago, and I quickly become
            deeply interested in <strong>front-end development</strong>.
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
            I'm passionate about learning, solving problems, and building
            responsive, user-friendly and visually engaging web experiences.
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
            My projects are built with <strong>React</strong> and vanilla{" "}
            <strong>JavaScript</strong>, often integrating <strong>APIs</strong>{" "}
            to enhance interactivity.
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
            I enjoy working with modern libraries like React Router and Redux,
            as well as frameworks like Bootstrap, Express.js, and tools such as
            Git, GitHub, SCSS, Material-UI (MUI), Webpack, Vite and Jira.
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
            My goal is to build scalable, modern front-end apps by following
            best practices and writing modular, easily maintainable code.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <CustomButton
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              sx={{ fontFamily: "Kenfolg Serif" }}
            >
              About me
            </CustomButton>

            <CustomButton
              variant="contained"
              color="primary"
              size="large"
              sx={{ ml: 2.5, fontFamily: "Kenfolg Serif" }}
              href="https://github.com/Flame787"
              target="_blank"
            >
              Github
            </CustomButton>
          </Box>
        </Grid>
      </Grid>

      {/* Projects section */}
      <Projects />
    </Container>
  );
}
