import { Container, Typography, Box, Grid } from "@mui/material";
import CustomButton from "../components/CustomButton";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomTypography from "../components/CustomTypography";

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
        <Typography id="aboutme"
          variant="h4"
          gutterBottom
          sx={{ mt: 6, mb: 4, textAlign: "center", color: "primary.title" }}
          fontFamily={"TheSeasons-Regular, serif"}
        >
          About me
        </Typography>
        <Grid
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
          <Box
            id="about-me-text"
            sx={{
              mt: 2,
              mb: 2,
            }}
          >
            <CustomTypography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                fontFamily: "Mulish-Extralight, sans-serif",
                fontSize: "1rem",
                textAlign: "justify",
              }}
            >
              My programming journey began three years ago, and I quickly became
              deeply interested in front-end development.
            </CustomTypography>
            <CustomTypography color="text.secondary" sx={{ marginBottom: 1 }}>
              I'm enthusiastic about learning, solving problems, and creating
              responsive, user-friendly and visually engaging web experiences.
            </CustomTypography>
            <CustomTypography color="text.secondary" sx={{ marginBottom: 1 }}>
              My projects are built with React and JavaScript, often integrating
              APIs to enhance interactivity.
            </CustomTypography>
            <CustomTypography color="text.secondary" sx={{ marginBottom: 1 }}>
              I also apply modern libraries like React Router, Redux,
              Material-UI (MUI), or frameworks such as Bootstrap, Express.js,
              and many other tools like SCSS, Webpack etc.
            </CustomTypography>
            <CustomTypography color="text.secondary" sx={{ marginBottom: 1 }}>
              My goal is to build scalable, modern front-end apps by following
              best practices and writing modular, easily maintainable code.
            </CustomTypography>
          </Box>
        </Grid>
        {/* <Typography
          variant="h5"
          fontFamily={"Kenfolg Serif"}
          sx={{ mt: 8, mb: 4, textAlign: "center", color: "primary.title" }}
        > */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{ mt: 6, mb: 4, textAlign: "center" }}
          fontFamily={"TheSeasons-Regular, serif"}
        >
          Technologies
        </Typography>
        <Box
          id="technologies"
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

        {/* <Typography
          variant="h5"
          fontFamily={"Kenfolg Serif"}
          sx={{ mt: 8, mb: 2, textAlign: "center", color: "primary.title" }}
        > */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{ mt: 6, mb: 4, textAlign: "center" }}
          fontFamily={"TheSeasons-Regular, serif"}
        >
          Skills
        </Typography>
        <Box
          id="skills"
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

        {/* <Typography
          variant="h5"
          fontFamily={"Kenfolg Serif"}
          sx={{ mt: 8, mb: 2, textAlign: "center", color: "primary.title" }}
        > */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{ mt: 6, mb: 4, textAlign: "center" }}
          fontFamily={"TheSeasons-Regular, serif"}
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
            sx={{
              fontSize: "1rem",
              textTransform: "none",
              fontFamily: "TheSeasons-Regular, serif",
              letterSpacing: "0.07em",
            }}
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
