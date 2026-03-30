import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Grid, Box, Fade } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
// import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ForumIcon from "@mui/icons-material/Forum";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LaptopIcon from "@mui/icons-material/Laptop";
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
// import ApartmentIcon from "@mui/icons-material/Apartment";

import Projects from "../components/Projects";

export default function Home({ darkMode }) {
  // fade-in animation:
  const [showSubTitle, setShowsubTitle] = useState(false);
  // const [showImage, setShowImage] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  // setting fade-in-state to true (only once, when component renders):
  useEffect(() => {
    setTimeout(() => setShowsubTitle(true), 400);
    // setTimeout(() => setShowImage(true), 500);
    setTimeout(() => setShowText1(true), 900);
    setTimeout(() => setShowText2(true), 1100);
    setTimeout(() => setShowText3(true), 1400);
  }, []);

  // animation for revealing name:
  function useRevealOnScroll() {
    const ref = useRef(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("animate");
            observer.disconnect(); // pokreni samo jednom
          }
        },
        { threshold: 0.4 },
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    return ref;
  }

  const revealRef = useRevealOnScroll();

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
        // className="flip-scale-2-hor-bottom"
        // style={{ animationDirection: "reverse" }}
        gutterBottom //
        sx={{
          animation:
            "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
          animationDelay: "0s",
          mt: 8,
          mb: 1,
          textAlign: "center",
          fontSize: {
            xs: "1.8rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2.4rem",
          },
        }}
        // fontFamily={"TheSeasons-Regular, serif"}
        // fontFamily={"Mulish-Extralight"}
        fontFamily={"Cabin, sans-serif"}
        fontWeight="600"
        fontStyle="normal"
      >
        Hi, I'm{" "}
        <Box
          ref={revealRef}
          className="animated-text-reveal"
          data-text="Marina"
          component="span"
          // sx={{ color: "primary.title" }}
        >
          Marina
        </Box>
      </Typography>

      <Fade in={showSubTitle} timeout={600}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            className="scale-up-center"
            // className="animated-text-reveal"
            data-text="full-stack JS developer"
            sx={{
              color: "primary.title",
              mt: 4,
              mb: 2,
              fontFamily: "Cabin, sans-serif",
              fontWeight: "600",
              fontSize: {
                xs: "1.4rem",
                sm: "1.6rem",
                md: "1.8rem",
                lg: "2rem",
              },

              animation:
                "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
              animationDelay: "0.2s",
            }}
          >
            full-stack JS developer
          </Typography>
          <Typography
            sx={{
              mt: 2,
              mb: 2,
              textAlign: "center",
              fontFamily: "Cabin, sans-serif",
              // fontSize: "1.4rem",
              fontSize: {
                xs: "1.2rem",
                sm: "1.2rem",
                md: "1.4rem",
                lg: "1.6rem",
              },
              animation:
                "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
              animationDelay: "0.4s",
            }}
          >
            passionate about creating interactive,
          </Typography>

          <Typography
            sx={{
              mt: 2,
              mb: 8,
              textAlign: "center",
              fontFamily: "Cabin, sans-serif",
              // fontSize: "1.4rem",
              fontSize: {
                xs: "1.2rem",
                sm: "1.2rem",
                md: "1.4rem",
                lg: "1.6rem",
              },
              animation:
                "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
              animationDelay: "0.6s",
            }}
          >
            API-driven interfaces with React and modern JavaScript.
          </Typography>
        </Box>
      </Fade>

      {/* container for both main illustration (left) and text boxes (right): */}
      <Grid
        container
        sx={{
          display: "grid",
          // transform: "none",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          columnGap: 4,
          rowGap: 4,
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {/* LEFT SIDE — IMAGE */}
        {/* <Fade in={showImage} timeout={600}> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            transition: "transform 0.6s ease, border 1s ease",
            "&:hover": {
              transform: "scale(1.02)",
              // border: "1.3px solid rgba(76, 201, 254, 0.4)",
            },
          }}
        >
          <Box
            component="img"
            src={darkMode ? "/Dev-port3.png" : "/Dev-port7.png"}
            alt="code"
            sx={{
              width: "100%",
              // maxWidth: "500px",
              maxWidth: { xs: "100%", sm: "80%", md: "50%", lg: "100%" },
              borderRadius: "16px",

              boxShadow:
                "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
              display: "block",
              // animation: "flip-scale-up-hor 1.2s linear reverse both",

              animation: "hero-image-flip-strong 0.9s ease-out both 0.5s",
            }}
          />
        </Box>
        {/* </Fade> */}

        {/* RIGHT SIDE — 2 TEXTBOXES */}
        <Box
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{
            // maxWidth: { xs: "80%", sm: "80%", md: "500px" },

            margin: "0 auto",
            wordWrap: "break-word",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* TEXTBOX 1 */}
          <Fade in={showText1} timeout={600}>
            <Box
              sx={{
                // width: 500,
                width: "100%",
                maxWidth: { xs: "100%", sm: "100%", md: "100%" },
                // height: 226,
                backgroundColor: !darkMode && "rgba(237, 250, 254, 0.6)",
                borderRadius: 4,
                border: "1px solid transparent",
                // "&:hover": {
                //   border: "1.3px solid rgba(76, 201, 254, 0.4)",
                // },
                p: 3.7,
                pl: {
                  xs: 3,
                  md: 5,
                },
                pr: {
                  xs: 3,
                  md: 5,
                },

                boxShadow:
                  "2px 2px 2px 0 rgba(76, 201, 254, 0.2), 0 6px 10px 0 rgba(76, 201, 254, 0.19)",
                transition: "transform 0.6s ease",
                "&:hover": {
                  // transform: "scale(1.02)",
                  border: "1.3px solid rgba(76, 201, 254, 0.4)",
                },
              }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  marginBottom: 1,
                  fontFamily: "Mulish-Extralight, sans-serif",
                  fontSize: {
                    xs: "1rem",
                    md: "1.2rem",
                  },
                  textAlign: "center",
                }}
              >
                Building <strong>modular</strong> and{" "}
                <strong>user-friendly</strong> web applications with{" "}
                <strong>React</strong> and <strong>TypeScript</strong>. <br />
                Following best practices to ensure <strong>
                  performance
                </strong>, <strong>accessibility</strong> and{" "}
                <strong>scalability</strong>.
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
                  to="/contact/#aboutme"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    fontFamily: "Cabin, sans-serif",
                    fontWeight: "500",
                    letterSpacing: "0.02em",
                    // letterSpacing: "0.07em",
                    fontSize: "1rem",
                    textTransform: "none",
                    transition: "transform 0.25s ease, border 0.25s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  ABOUT ME
                </CustomButton>

                <CustomButton
                  component={Link}
                  to="/contact#contactme"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    fontFamily: "Cabin, sans-serif",
                    fontWeight: "500",
                    letterSpacing: "0.02em",
                    // letterSpacing: "0.07em",
                    fontSize: "1rem",
                    textTransform: "none",
                    transition: "transform 0.25s ease, border 0.25s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  CONTACT ME
                </CustomButton>
              </Box>
            </Box>
          </Fade>

          {/* TEXTBOX 2 */}
          <Fade in={showText2} timeout={600}>
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "100%", md: "100%" },
                // height: 226,
                backgroundColor: !darkMode && "rgba(237, 250, 254, 0.6)",
                borderRadius: 4,
                border: "1px solid transparent",
                // "&:hover": {
                //   border: "1.3px solid rgba(76, 201, 254, 0.4)",
                // },
                p: 3.7,
                pl: {
                  xs: 4,
                  md: 5,
                },
                pr: {
                  xs: 4,
                  md: 5,
                },
                boxShadow:
                  "2px 2px 2px 0 rgba(76, 201, 254, 0.2), 0 6px 10px 0 rgba(76, 201, 254, 0.19)",
                transition: "transform 0.6s ease, border 1s ease",
                "&:hover": {
                  // transform: "scale(1.02)",
                  border: "1.3px solid rgba(76, 201, 254, 0.4)",
                },
              }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  marginBottom: 1,
                  fontFamily: "Mulish-Extralight, sans-serif",
                  fontSize: {
                    xs: "1rem",
                    md: "1.2rem",
                  },
                  textAlign: "center",
                }}
              >
                Experienced with diverse frontend and backend technologies:{" "}
                <br />
                <strong>React Router</strong>, <strong>Redux</strong>,{" "}
                <strong>TanStack Query</strong>, <strong>Next.js</strong>,{" "}
                <strong>SCSS</strong>, <strong>Bootstrap</strong>,{" "}
                <strong>Material UI</strong>, <strong>TypeScript</strong>,{" "}
                <strong>Vite</strong>, <strong>Jest</strong>,{" "}
                <strong>Vitest</strong>, <strong>Node.js</strong>,{" "}
                <strong>Express.js</strong> and <strong>MySQL</strong>.
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
                  to="/contact#skillsicon"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    // fontFamily: "TheSeasons-Regular, serif",
                    // fontFamily: "Mulish-Extralight, sans-serif",
                    // letterSpacing: "0.07em",
                    fontFamily: "Cabin, sans-serif",
                    fontWeight: "500",
                    letterSpacing: "0.02em",
                    fontSize: "1rem",
                    textTransform: "none",
                    display: "flex",
                    textAlign: "center",
                    transition: "transform 0.25s ease, border 0.25s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  SKILLS AND TECHNOLOGIES
                </CustomButton>
              </Box>
            </Box>
          </Fade>
        </Box>
      </Grid>

      {/* TEXTBOX 3 - below the picture and 2 smaller textboxes */}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: {
            xs: 6,
            md: 10,
          },
        }}
      >
        <Fade in={showText3} timeout={600}>
          <Box
            sx={{
              width: "100%",
              backgroundColor: !darkMode && "rgba(237, 250, 254, 0.6)",
              borderRadius: 4,
              border: "1px solid transparent",
              // "&:hover": {
              //   border: "1.3px solid rgba(76, 201, 254, 0.4)",
              // },
              p: 3.7,
              pl: 5,
              pr: 5,
              boxShadow:
                "2px 2px 2px 0 rgba(76, 201, 254, 0.2), 0 6px 10px 0 rgba(76, 201, 254, 0.19)",
              transition: "transform 0.6s ease, border 1s ease",
              "&:hover": {
                // transform: "scale(1.02)",
                border: "1.3px solid rgba(76, 201, 254, 0.4)",
              },
            }}
          >
            <Typography
              color="text.secondary"
              sx={{
                marginBottom: 3,
                // fontFamily: "Mulish-Extralight, sans-serif",
                fontFamily: "Cabin, sans-serif",
                fontSize: "1.6rem",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Check out my latest projects:
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: `1px solid ${darkMode ? "rgba(237, 250, 254, 0.3)" : "rgba(22, 175, 242, 0.2)"}`,
                paddingTop: "4px",
                paddingBottom: "8px",
              }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  transition: "transform 0.25s ease, border 0.25s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                  marginBottom: 1,
                  fontFamily: "Mulish-Extralight, sans-serif",
                  fontSize: {
                    xs: "1rem",
                    md: "1.2rem",
                  },
                  textAlign: "center",
                  color: "#1EA0D9",
                  "& a": {
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#1EA0D9",
                    "&:link": {
                      color: "#1EA0D9",
                    },
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    "&:visited": {
                      color: "#1EA0D9", // prevent violet color on visited link
                    },
                  },
                }}
              >
                <HolidayVillageIcon
                  sx={{
                    fontSize: "1.2rem",
                    verticalAlign: "middle",
                    mb: 0.6,
                    color: darkMode ? "white" : "text.secondary",
                  }}
                />{" "}
                <a href="#project00" className="project1234">
                  <strong>Full-stack holiday rentals listing app</strong> - React, TypeScript, Redux Toolkit,
                  TanStack Query, Express.js
                </a>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: `1px solid ${darkMode ? "rgba(237, 250, 254, 0.3)" : "rgba(22, 175, 242, 0.2)"}`,
                paddingTop: "4px",
                paddingBottom: "8px",
              }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  transition: "transform 0.25s ease, border 0.25s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                  marginBottom: 1,
                  fontFamily: "Mulish-Extralight, sans-serif",
                  fontSize: {
                    xs: "1rem",
                    md: "1.2rem",
                  },
                  textAlign: "center",
                  color: "#1EA0D9",
                  "& a": {
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#1EA0D9",
                    "&:link": {
                      color: "#1EA0D9",
                    },
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    "&:visited": {
                      color: "#1EA0D9", // prevent violet color on visited link
                    },
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    fontSize: "1.2rem",
                    verticalAlign: "middle",
                    mb: 0.6,
                    color: darkMode ? "white" : "text.secondary",
                  }}
                />{" "}
                <a href="#project0" className="project1234">
                  <strong>Full-stack shop app</strong> - React, Redux Toolkit,
                  TanStack Query, Express.js and MySQL database
                </a>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: `1px solid ${darkMode ? "rgba(237, 250, 254, 0.3)" : "rgba(22, 175, 242, 0.2)"}`,
                paddingTop: "10px",
                paddingBottom: "8px",
              }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  transition: "transform 0.25s ease, border 0.25s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                  marginBottom: 1,
                  fontFamily: "Mulish-Extralight, sans-serif",
                  fontSize: {
                    xs: "1rem",
                    md: "1.2rem",
                  },
                  textAlign: "center",
                  color: "#1EA0D9",
                  "& a": {
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#1EA0D9",
                    "&:link": {
                      color: "#1EA0D9",
                    },
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    "&:visited": {
                      color: "#1EA0D9", // prevent violet color on visited link
                    },
                  },
                }}
              >
                <ForumIcon
                  sx={{
                    fontSize: "1.2rem",
                    verticalAlign: "middle",
                    mb: 0.6,
                    color: darkMode ? "white" : "text.secondary",
                  }}
                />{" "}
                <a href="#project1" className="project1234">
                  <strong>Real-time chat application</strong> - React, Spotify
                  API and Scaledrone WebSocket
                </a>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: `1px solid ${darkMode ? "rgba(237, 250, 254, 0.3)" : "rgba(22, 175, 242, 0.2)"}`,
                paddingTop: "10px",
                paddingBottom: "8px",
              }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  transition: "transform 0.25s ease, border 0.25s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                  marginBottom: 1,
                  fontFamily: "Mulish-Extralight, sans-serif",
                  fontSize: {
                    xs: "1rem",
                    md: "1.2rem",
                  },
                  textAlign: "center",
                  color: "#1EA0D9",
                  "& a": {
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#1EA0D9",
                    "&:link": {
                      color: "#1EA0D9",
                    },
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    "&:visited": {
                      color: "#1EA0D9", // prevent violet color on visited link
                    },
                  },
                }}
              >
                <HeadphonesIcon
                  sx={{
                    fontSize: "1.2rem",
                    verticalAlign: "middle",
                    mb: 0.6,
                    color: darkMode ? "white" : "text.secondary",
                  }}
                />{" "}
                <a href="#project2" className="project1234">
                  <strong>Music search platform</strong> - JavaScript, Spotify
                  API, SCSS and Express.js
                </a>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: `1px solid ${darkMode ? "rgba(237, 250, 254, 0.3)" : "rgba(22, 175, 242, 0.2)"}`,
                paddingTop: "10px",
                paddingBottom: "8px",
              }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  transition: "transform 0.25s ease, border 0.25s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                  marginBottom: 1,
                  fontFamily: "Mulish-Extralight, sans-serif",
                  fontSize: {
                    xs: "1rem",
                    md: "1.2rem",
                  },
                  textAlign: "center",
                  color: "#1EA0D9",
                  "& a": {
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#1EA0D9",
                    "&:link": {
                      color: "#1EA0D9",
                    },
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    "&:visited": {
                      color: "#1EA0D9", // prevent violet color on visited link
                    },
                  },
                }}
              >
                <MenuBookIcon
                  sx={{
                    fontSize: "1.2rem",
                    verticalAlign: "middle",
                    mb: 0.6,
                    color: darkMode ? "white" : "text.secondary",
                  }}
                />{" "}
                <a href="#project3" className="project1234">
                  <strong>Book website</strong> - JavaScript, Open Library API
                  and Chart.js
                </a>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderBottom: "1px solid rgba(237, 250, 254, 0.3)",
                paddingTop: "10px",
                paddingBottom: "8px",
              }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  transition: "transform 0.25s ease, border 0.25s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                  marginBottom: 1,
                  fontFamily: "Mulish-Extralight, sans-serif",
                  fontSize: {
                    xs: "1rem",
                    md: "1.2rem",
                  },
                  textAlign: "center",
                  color: "#1EA0D9",
                  "& a": {
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#1EA0D9",
                    "&:link": {
                      color: "#1EA0D9",
                    },
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    "&:visited": {
                      color: "#1EA0D9", // prevent violet color on visited link
                    },
                  },
                }}
              >
                <LaptopIcon
                  sx={{
                    fontSize: "1.2rem",
                    verticalAlign: "middle",
                    mb: 0.3,
                    color: darkMode ? "white" : "text.secondary",
                  }}
                />{" "}
                <a href="#project4" className="project1234">
                  <strong>Developer portfolio</strong> - React Router and
                  Material UI
                </a>
              </Typography>
            </Box>

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
                to="/#projects"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  // fontFamily: "TheSeasons-Regular, serif",
                  fontFamily: "Cabin, sans-serif",
                  letterSpacing: "0.02em",
                  fontSize: "1rem",
                  textTransform: "none",
                  transition: "transform 0.25s ease, border 0.25s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                PROJECTS
              </CustomButton>

              <CustomButton
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  // fontFamily: "Mulish-Extralight, sans-serif",
                  fontFamily: "Cabin, sans-serif",
                  letterSpacing: "0.02em",
                  fontSize: "1rem",
                  textTransform: "none",
                  transition: "transform 0.25s ease, border 0.25s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
                href="https://github.com/Flame787"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB <OpenInNewIcon sx={{ ml: 0.7, fontSize: "1rem" }} />
              </CustomButton>
            </Box>
          </Box>
        </Fade>
      </Box>

      {/* Projects section */}
      <Projects />
    </Container>
  );
}
