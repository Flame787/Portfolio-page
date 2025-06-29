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
        gutterBottom
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
        {/* gutterBottom - adds margin under h3-element */}
        {/* sx={{ mt: 6 }} - adding style: margin-top: 6 x 8px = 48px */}
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
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: 6,
        }}
        direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
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

              justifyContent: {
                xs: "center",
                lg: "flex-end",
              },
              flexDirection: "row",
              flexBasis: "50%",
              m: 0,
              lineHeight: 0,
            }}
          >
            <Box
              component="img"
              // src={darkMode ? "/732.png" : "/730.png"}
              src={darkMode ? "/Dev-port3.png" : "/Dev-port7.png"}
              alt="code"
              sx={{
                width: "100%",
                maxWidth: "487px",
                borderRadius: "16px",
                // borderRadius: "270px",
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
              ml: { xs: 2, sm: 2, md: 0, lg: 0 },
              // ml: { xs: 5, sm: 5, md: 5, lg: 5 },
              mr: { xs: 2, sm: 2, md: 0, lg: 0 },
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
                fontSize: "1rem",
                textAlign: "justify",
              }}
            >
              My programming journey began three years ago, and I quickly became
              deeply interested in front-end development.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                fontFamily: "Mulish-Extralight, sans-serif",
                fontSize: "1rem",
                textAlign: "justify",
              }}
            >
              I'm enthusiastic about learning, solving problems, and creating
              responsive, user-friendly and visually engaging web experiences.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                fontFamily: "Mulish-Extralight, sans-serif",
                fontSize: "1rem",
                textAlign: "justify",
              }}
            >
              My projects are built with React and JavaScript, often integrating
              APIs to enhance interactivity.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                // fontFamily: "Lato-Light, sans-serif",
                fontFamily: "Mulish-Extralight, sans-serif",
                fontSize: "1rem",
                textAlign: "justify",
              }}
            >
              I also apply modern libraries like React Router, Redux,
              Material-UI (MUI), or frameworks such as Bootstrap, Express.js,
              and many other tools like SCSS, Webpack etc.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 1,
                // fontFamily: "Lato-Light, sans-serif",
                fontFamily: "Mulish-Extralight, sans-serif",
                // fontSize: "1.03rem",
                fontSize: "1rem",
                textAlign: "justify",
              }}
            >
              My goal is to build scalable, modern front-end apps by following
              best practices and writing modular, easily maintainable code.
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
                to="/contact#skills"
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
                My skills
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
