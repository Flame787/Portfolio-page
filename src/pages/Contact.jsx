import { Container, Typography, Box, Grid, Link } from "@mui/material";
import CustomButton from "../components/CustomButton";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Contact({ darkMode }) {
  const location = useLocation();

  // useEffect(() => {
  //   if (location.hash === "#about") {
  //     const aboutSection = document.getElementById("about");
  //     if (aboutSection) {
  //       aboutSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [location]);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const section = document.getElementById(location.hash.substring(1));
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, [location]);


  return (
    <>
      <Container id="about">
        <Typography
          variant="h4"
          fontFamily={"Kenfolg Serif"}
          sx={{ mt: 6, mb: 4, textAlign: "center" }}
        >
          About me
        </Typography>
        <Grid
          id="about-me"
          sx={{
            mt: 2,
            mb: 2,
            p: 2,
            border: "1px solid transparent",
            "&:hover": {
              border: "1.3px solid rgba(76, 201, 254, 0.4)",
            },
            borderRadius: 4,
            boxShadow:
              "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
          }}
        >
          <Box id="about-me-text" sx={{ mt: 2, mb: 2 }}>
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
              <strong>JavaScript</strong>, often integrating{" "}
              <strong>APIs</strong> to enhance interactivity.
            </Typography>
            <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
              I enjoy working with modern libraries like React Router and Redux,
              as well as frameworks like Bootstrap, Express.js, and tools such
              as Git, GitHub, SCSS, Material-UI (MUI), Webpack, Vite and Jira.
            </Typography>
            <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
              My goal is to build scalable, modern front-end apps by following
              best practices and writing modular, easily maintainable code.
            </Typography>
          </Box>
        </Grid>
        <Typography
          variant="h5"
          fontFamily={"Kenfolg Serif"}
          sx={{ mt: 8, mb: 4, textAlign: "center", color: "primary.title" }}
        >
          Technologies
        </Typography>
        <Box
          id="projects"
          sx={{
            mt: 2,
            mb: 2,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <button className="round" sx={{ color: "primary.form" }}>
            React
          </button>
          <button className="round">JavaScript</button>
          <button className="round">external APIs</button>
          <button className="round">Scaledrone Websocket</button>
          <button className="round">React Router</button>
          <button className="round">Redux</button>
          <button className="round">Bootstrap</button>
          <button className="round">SCSS</button>
          <button className="round">Material-UI</button>
          <button className="round">Express.js</button>
          <button className="round">EmailJS</button>
          <button className="round">Scaledrone Websocket</button>
          <button className="round">Git</button>
          <button className="round">GitHub</button>
          <button className="round">Webpack</button>
          <button className="round">Vite</button>
          <button className="round">Jira</button>
          <button className="round">HTML</button>
          <button className="round">CSS</button>
          <button className="round">Visual Studio Code</button>
        </Box>

        <Typography
          variant="h5"
          fontFamily={"Kenfolg Serif"}
          sx={{ mt: 8, mb: 2, textAlign: "center", color: "primary.title" }}
        >
          Skills
        </Typography>
        <Box
          id="projects"
          sx={{
            mt: 2,
            mb: 2,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <button className="round">Agile</button>
          <button className="round">Problem solving</button>
          <button className="round">PC hardware</button>
          <button className="round">MS Office</button>
          <button className="round">Python - basic</button>
          <button className="round">English</button>
          <button className="round">German</button>
          <button className="round">Mentoring</button>
          <button className="round">Organisation skills</button>
        </Box>

        <Typography
          variant="h5"
          fontFamily={"Kenfolg Serif"}
          sx={{ mt: 8, mb: 2, textAlign: "center", color: "primary.title" }}
        >
          My GitHub Activity
        </Typography>
        <Box
          id="github-activity"
          sx={{ mt: 6, mb: 4, display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://ghchart.rshah.org/Flame787"
            alt="GitHub Activity Chart"
            className="github-chart"
            style={{ maxWidth: "100%" }}
          ></img>
        </Box>

        <Box sx={{ mt: 3, mb: 8, textAlign: "center" }}>
          <CustomButton
            variant="contained"
            color="primary"
            size="large"
            sx={{ fontFamily: "Kenfolg Serif" }}
            href="https://github.com/Flame787"
            target="_blank"
          >
            Github
          </CustomButton>
        </Box>
        <Box id="contactme">
          <ContactForm darkMode={darkMode} />
        </Box>
      </Container>
    </>
  );
}
