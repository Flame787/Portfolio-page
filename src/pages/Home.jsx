import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Grid, Box, Fade } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
// import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Projects from "../components/Projects";

export default function Home({ darkMode }) {
  // fade-in animation:
  const [showSubTitle, setShowsubTitle] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);

  // setting fade-in-state to true (only once, when component renders):
  useEffect(() => {
    setTimeout(() => setShowsubTitle(true), 200);
    setTimeout(() => setShowImage(true), 500);
    setTimeout(() => setShowText(true), 800);
  }, []);

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
    <Container id="home" sx={{ scrollMarginTop: "100px" }}>
      <Typography
        variant="h4"
        gutterBottom //
        sx={{
          mt: 8,
          mb: 4,
          textAlign: "center",
          fontSize: {
            xs: "1.8rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2.2rem",
          },
        }}
        fontFamily={"TheSeasons-Regular, serif"}
      >
        Hi, I´m{" "}
        <Box component="span" sx={{ color: "primary.title" }}>
          Marina
        </Box>
      </Typography>
      <Fade in={showSubTitle} timeout={600}>
        <Box>
          <Typography
            sx={{
              mt: 4,
              mb: 1,
              textAlign: "center",
              fontFamily: "Mulish-Extralight, sans-serif",
              fontSize: "1.2rem",
            }}
          >
            a front-end developer passionate about creating
          </Typography>
          <Typography
            sx={{
              mt: 1,
              mb: 6,
              textAlign: "center",
              fontFamily: "Mulish-Extralight, sans-serif",
              fontSize: "1.2rem",
            }}
          >
            interactive, API-driven interfaces with React and modern JavaScript.
          </Typography>
        </Box>
      </Fade>

      <Grid
        container
        // spacing={2}
        sx={{
          display: "flex",
          alignItems: "stretch",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          // alignItems: "center",
          // flexWrap: "nowrap",
          gap: 6,
          justifyContent: "center",
        }}
        direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "center",
          lg: "center",
        }}
      >
        <Fade in={showImage} timeout={600}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "center",
                lg: "center",
              },
            }}
          >
            <Box
              component="img"
              src={darkMode ? "/Dev-port3.png" : "/Dev-port7.png"}
              alt="code"
              sx={{
                width: "100%",
                maxWidth: "490px",
                borderRadius: "16px",
                p: 0,
                m: 0,
                boxShadow:
                  "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
              }}
            />
          </Grid>
        </Fade>

        <Fade in={showText} timeout={600}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              flexBasis: "50%",
              ml: { xs: 0.3, sm: 2, md: 2, lg: 0 },
              mr: { xs: 0.3, sm: 2, md: 2, lg: 0 },
              backgroundColor: !darkMode && "rgba(237, 250, 254, 0.6)",
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
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                fontFamily: "Mulish-Extralight, sans-serif",
                fontSize: "0.95rem",
                textAlign: "justify",
              }}
            >
              My primary focus is building scalable, responsive, and
              user-friendly web applications with React, JavaScript, and
              TypeScript, following best practices in performance,
              accessibility, and maintainability.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                fontFamily: "Mulish-Extralight, sans-serif",
                fontSize: "0.95rem",
                textAlign: "justify",
              }}
            >
              I have experience integrating REST APIs and working with different
              frontend tools, including React Router, Redux, SCSS, Bootstrap,
              Material UI, Vite, and Jest, as well as backend technologies such
              as Express.js and MySQL.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                fontFamily: "Mulish-Extralight, sans-serif",
                fontSize: "0.95rem",
                textAlign: "justify",
              }}
            >
              My portfolio includes four major end-to-end developed projects:
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                fontFamily: "Mulish-Extralight, sans-serif",
                fontSize: "0.95rem",
                textAlign: "justify",
                "& a": {
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#E0FFFF",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  "&:visited": {
                    color: "#1EA0D9", // prevent violet color on visited link
                  },
                },
              }}
            >
              <a href="#project1" className="project1234">
                - Real-time chat application with React and WebSockets
              </a>
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                fontFamily: "Mulish-Extralight, sans-serif",
                fontSize: "0.95rem",
                textAlign: "justify",
                "& a": {
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#E0FFFF",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  "&:visited": {
                    color: "#1EA0D9", // prevent violet color on visited link
                  },
                },
              }}
            >
              <a href="#project2" className="project1234">
                - Music search platform with Spotify API and Express.js on
                backend
              </a>
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                fontFamily: "Mulish-Extralight, sans-serif",
                fontSize: "0.95rem",
                textAlign: "justify",
                "& a": {
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#E0FFFF",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  "&:visited": {
                    color: "#1EA0D9", // prevent violet color on visited link
                  },
                },
              }}
            >
              <a href="#project3" className="project1234">
                - Book website using the Open Library API and Chart.js
              </a>
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                fontFamily: "Mulish-Extralight, sans-serif",
                fontSize: "0.95rem",
                textAlign: "justify",
                "& a": {
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#E0FFFF",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  "&:visited": {
                    color: "#1EA0D9", // prevent violet color on visited link
                  },
                },
              }}
            >
              <a href="#project4" className="project1234">
                - Developer portfolio built with React Router and Material UI
              </a>
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <CustomButton
                component={Link}
                to="/contact"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  fontFamily: "TheSeasons-Regular, serif",
                  letterSpacing: "0.07em",
                  fontSize: "1rem",
                  textTransform: "none",
                }}
              >
                About me
              </CustomButton>

              <CustomButton
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  fontFamily: "TheSeasons-Regular, serif",
                  letterSpacing: "0.07em",
                  fontSize: "1rem",
                  textTransform: "none",
                }}
                href="https://github.com/Flame787"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <OpenInNewIcon sx={{ ml: 0.7, fontSize: "1rem" }} />
              </CustomButton>

              <CustomButton
                component={Link}
                to="/contact#contactme"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  fontFamily: "TheSeasons-Regular, serif",
                  letterSpacing: "0.07em",
                  fontSize: "1rem",
                  textTransform: "none",
                }}
              >
                Contact
              </CustomButton>
            </Box>
          </Grid>
        </Fade>
      </Grid>

      {/* Projects section */}
      <Projects />
    </Container>
  );
}
