import { useState } from "react";
import { useEffect } from "react";
import {
  Box,
  Modal,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CustomButton from "./CustomButton";
import CustomTypography from "./CustomTypography";

export default function Projects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#home") {
      const el = document.getElementById("home");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // each picture from carusel can be selected and made bigger - turned into Modal:
  const [selectedImage, setSelectedImage] = useState(null);

  const images1 = [
    "/011.png",
    "/012.png",
    "/013.png",
    "/014.png",
    "/015.png",
    "/016.png",
    "/017.png",
    "/018.png",
    "/019.png",
    "/020.png",
    "/021.png",
    "/022.png",
  ];

  const images2 = [
    "/Tolkien01.png",
    "/Tolkien02.png",
    "/Tolkien03.png",
    "/Tolkien04.png",
    "/Tolkien05.png",
    "/Tolkien06.png",
    "/Tolkien07.png",
    "/Tolkien08.png",
  ];

  const images3 = [
    "/portfolio1.png",
    "/portfolio2.png",
    "/portfolio3.png",
    "/portfolio4.png",
    "/portfolio5.png",
    "/portfolio6.png",
    "/portfolio7.png",
    "/portfolio8.png",
    "/portfolio9.png",
    "/portfolio10.png",
  ];

  // arrows for previous/next picture in carousel:

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowBackIosNewIcon
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#34a8d9",
          left: 10,
          zIndex: 1,
          fontSize: "30px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowForwardIosIcon
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#34a8d9",
          right: 10,
          zIndex: 1,
          fontSize: "30px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box id="projects" sx={{ mt: 6, scrollMarginTop: "100px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          mt: 10,
          mb: 6,
          textAlign: "center",
          fontFamily: "TheSeasons-Regular, serif",
          fontSize: {
            xs: "1.8rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2rem",
          },
        }}
      >
        My projects
      </Typography>

      {/* Grid for project cards */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Project 0 */}
        <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{ mb: 6 }} id="project0">
          <Card
            sx={{
              width: "100%",
              margin: "0 auto",
              wordWrap: "break-word",
              borderRadius: 4,
              transition: "border 0.3s ease",
              boxShadow:
                "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
              border: "1px solid transparent",
              "&:hover": {
                border: "1.3px solid rgba(76, 201, 254, 0.4)",
              },
            }}
          >
            {/* <Card sx={{ flexGrow: 1, wordWrap: 'break-word' }}> */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                textAlign: "center",
                mt: 4,
                mb: 4,
                color: "primary.title3",
                fontFamily: "TheSeasons-Regular, serif",
                letterSpacing: "0.05em",
                fontSize: "1.5rem",
              }}
            >
              Full
              <Box
                component="span"
                sx={{ fontFamily: "Mulish-Extralight, sans-serif" }}
              >
                -
              </Box>
              Stack Shop App with React, Express.js and MySQL database
            </Typography>

            <CardMedia>
              <Box
                sx={{
                  width: "100%",
                  height: {
                    xs: 220 + 20,
                    sm: 320 + 30,
                    md: 420 + 40,
                    lg: 520,
                  },
                  overflow: "hidden",
                  pl: 4,
                  pr: 4,
                  pb: { xs: 0, sm: 0, md: 0 },
                  "& .slick-dots": {
                    bottom: -50,
                  },
                  "& .slick-dots li button:before": {
                    fontSize: "12px",
                    color: "#34a8d9",
                  },
                  "& .slick-dots li.slick-active button:before": {
                    color: "#34a8d9",
                  },
                }}
              >
                <Slider {...settings}>
                  {images1.map((src, i) => (
                    <Box
                      key={i}
                      component="img"
                      // src="/011.png"
                      //  alt="Slide 1"
                      src={src}
                      alt={`Slide ${i + 1}`}
                      sx={{
                        width: "100%",
                        height: { xs: 150, sm: 250, md: 350, lg: 450 },
                        objectFit: "contain",
                        borderRadius: 4,
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setSelectedImage(selectedImage === src ? null : src)
                      }
                    />
                  ))}
                </Slider>
              </Box>
            </CardMedia>

            {/*  */}
            <CardContent>
              <CustomTypography>
                Full-stack e-commerce application built with React on the
                frontend and Express.js/Node.js on the backend, using MySQL as
                the database.
              </CustomTypography>

              <CustomTypography>
                Implements advanced routing with React Router, data fetching and
                caching with TanStack Query, global state management with
                Context API and Redux Toolkit, and modular architecture built
                for scalability.
              </CustomTypography>
              <CustomTypography>
                Includes product sorting (by price and alphabetically),
                category-based filtering and shopping cart logic. Soon will also
                include payment and delivery options, user authentication via
                JWT, and a separate admin panel with editing options and
                business charts.
              </CustomTypography>
              <CustomTypography>
                Technologies:
                <button className="round">React</button>
                <button className="round">React Router</button>
                <button className="round">Redux Toolkit</button>
                <button className="round">TanStack Query</button>
                <button className="round">Express.js</button>
                <button className="round">MySQL</button>
              </CustomTypography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{
                    ml: 2,
                    fontSize: "1rem",
                    textTransform: "none",
                    fontFamily: "TheSeasons-Regular, serif",
                    letterSpacing: "0.07em",
                  }}
                  href="https://github.com/Flame787/Shop-app"
                  target="_blank"
                >
                  GitHub <OpenInNewIcon sx={{ ml: 0.7, fontSize: "1rem" }} />
                </CustomButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Project 1 */}
        <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{ mb: 6 }} id="project1">
          <Card
            sx={{
              width: "100%",
              margin: "0 auto",
              wordWrap: "break-word",
              borderRadius: 4,
              transition: "border 0.3s ease",
              boxShadow:
                "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
              border: "1px solid transparent",
              "&:hover": {
                border: "1.3px solid rgba(76, 201, 254, 0.4)",
              },
            }}
          >
            {/* <Card sx={{ flexGrow: 1, wordWrap: 'break-word' }}> */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                textAlign: "center",
                mt: 4,
                mb: 4,
                color: "primary.title3",
                fontFamily: "TheSeasons-Regular, serif",
                letterSpacing: "0.05em",
                fontSize: "1.5rem",
              }}
            >
              React Chat App with Scaledrone Websocket
            </Typography>

            <Box sx={{ px: 4 }}>
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "56.25%",
                  px: 4,
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/839xzx8jEkI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Box>
            <CardContent>
              <CustomTypography>
                This real-time chat application is built with React and powered
                by the Scaledrone WebSocket for live communication.
              </CustomTypography>
              <CustomTypography>
                After entering a username and selecting an avatar, users can
                choose from 7 themed chat rooms where they can interact with
                other currently active participants.
              </CustomTypography>
              <CustomTypography>
                The app supports: browsing chat history, using emojis (via
                emoji-picker-react), sending GIFs (via the Giphy API), and
                uploading files (handled through Supabase).
              </CustomTypography>
              <CustomTypography>
                Technologies:
                <button className="round">React</button>
                <button className="round">Scaledrone Websocket</button>
                <button className="round">external API</button>
              </CustomTypography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <CustomButton
                  variant="contained"
                  component="a"
                  href="https://chat-app.marina-dev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "none",
                    fontFamily: "TheSeasons-Regular, serif",
                    letterSpacing: "0.07em",
                  }}
                >
                  Live page <OpenInNewIcon sx={{ ml: 0.7, fontSize: "1rem" }} />
                </CustomButton>

                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{
                    ml: 2,
                    fontSize: "1rem",
                    textTransform: "none",
                    fontFamily: "TheSeasons-Regular, serif",
                    letterSpacing: "0.07em",
                  }}
                  href="https://github.com/Flame787/Chat-app-React"
                  target="_blank"
                >
                  GitHub <OpenInNewIcon sx={{ ml: 0.7, fontSize: "1rem" }} />
                </CustomButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Project 2 */}

        <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{ mb: 6 }} id="project2">
          <Card
            sx={{
              width: "100%",
              margin: "0 auto",
              wordWrap: "break-word",
              borderRadius: 4,
              transition: "border 0.3s ease",
              boxShadow:
                "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
              border: "1px solid transparent",
              "&:hover": {
                border: "1.3px solid rgba(76, 201, 254, 0.4)",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                textAlign: "center",
                mt: 4,
                mb: 4,
                ml: 4,
                mr: 4,
                color: "primary.title3",
                fontSize: "1.5rem",
                fontFamily: "Marcellus-Regular, serif",
              }}
            >
              Music Search App powered by Spotify API
            </Typography>

            <Box sx={{ px: 4 }}>
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "56.25%",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/xcBfPCyKA-8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Box>

            <CardContent>
              <CustomTypography>
                Music Domain is a dynamic music search application that allows
                users to explore artists, albums, and songs using real-time data
                from the Spotify API.
              </CustomTypography>
              <CustomTypography>
                Users can search for music artists, songs, and albums, listen to
                30-second previews of individual tracks or full albums, like and
                save tracks to a favorites playlist, and access full songs or
                artist details via external Spotify links.
              </CustomTypography>
              <CustomTypography>
                Express.js is used on the backend for Spotify authentication.
                The app also features 16 different visual themes (styled
                entirely with SCSS), letting users personalize their experience
                with one click.
              </CustomTypography>

              <CustomTypography>
                Technologies:
                <button className="round">JavaScript</button>
                <button className="round">SCSS</button>
                <button className="round">external API</button>
                <button className="round">Express.js</button>
              </CustomTypography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <CustomButton
                  variant="contained"
                  component="a"
                  href="https://music-app.marina-dev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "none",

                    fontFamily: "TheSeasons-Regular, serif",
                    letterSpacing: "0.07em",
                  }}
                >
                  Live page <OpenInNewIcon sx={{ ml: 0.7, fontSize: "1rem" }} />
                </CustomButton>
                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{
                    ml: 2,
                    fontSize: "1rem",
                    textTransform: "none",

                    fontFamily: "TheSeasons-Regular, serif",
                    letterSpacing: "0.07em",
                  }}
                  href="https://github.com/Flame787/Music-app-Spotify-API"
                  target="_blank"
                >
                  GitHub <OpenInNewIcon sx={{ ml: 0.7, fontSize: "1rem" }} />
                </CustomButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Project 3 */}

        <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{ mb: 6 }} id="project3">
          <Card
            sx={{
              maxWidth: "100%",
              margin: "0 auto",
              wordWrap: "break-word",
              borderRadius: 4,
              transition: "border 0.3s ease",
              boxShadow:
                "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
              border: "1px solid transparent",
              "&:hover": {
                border: "1.3px solid rgba(76, 201, 254, 0.4)",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                textAlign: "center",
                mt: 4,
                mb: 4,
                color: "primary.title3",
                fontSize: "1.5rem",
                fontFamily: "Marcellus-Regular, serif",
              }}
            >
              Tolkien Info Page with OpenLibrary API
            </Typography>
            <CardMedia>
              <Box
                sx={{
                  width: "100%",
                  height: {
                    xs: 220 + 20,
                    sm: 320 + 30,
                    md: 420 + 40,
                    lg: 520,
                  },
                  overflow: "hidden",
                  pl: 4,
                  pr: 4,
                  pb: { xs: 0, sm: 0, md: 0 },
                  "& .slick-dots": {
                    bottom: -50,
                  },
                  "& .slick-dots li button:before": {
                    fontSize: "12px",
                    color: "#34a8d9",
                  },
                  "& .slick-dots li.slick-active button:before": {
                    color: "#34a8d9",
                  },
                }}
              >
                <Slider {...settings}>
                  {images2.map((src, i) => (
                    <Box
                      key={i}
                      component="img"
                      src={src}
                      alt={`Slide ${i + 1}`}
                      sx={{
                        width: "100%",
                        height: { xs: 150, sm: 250, md: 350, lg: 450 },
                        objectFit: "contain",
                        borderRadius: 4,
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setSelectedImage(selectedImage === src ? null : src)
                      }
                    />
                  ))}
                </Slider>
              </Box>
            </CardMedia>
            <CardContent>
              <CustomTypography>
                A fan-made landing page dedicated to J. R. R. Tolkien’s legacy,
                featuring biographical information, his published works, book
                illustrations and external resources. One of my earlier
                projects, recently refreshed with improved layout and updated
                code.
              </CustomTypography>
              <CustomTypography>
                The app integrates with the Open Library API to fetch info about
                books authored by Tolkien, and sorts books according to their
                current ratings on Open Library.
              </CustomTypography>
              <CustomTypography>
                It also allows users to vote for their favorite Tolkien's book,
                counting the results (stored locally in the browser), and
                visually displaying them with Chart.js. Users can also send
                emails directly from the page via EmailJS.
              </CustomTypography>
              <CustomTypography>
                Technologies:
                <button className="round">JavaScript</button>
                <button className="round">Bootstrap</button>
                <button className="round">external API</button>
                <button className="round">EmailJS</button>
                <button className="round">Chart.js</button>
              </CustomTypography>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <CustomButton
                  variant="contained"
                  component="a"
                  href="https://tolkien.marina-dev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "none",

                    fontFamily: "TheSeasons-Regular, serif",
                    letterSpacing: "0.07em",
                  }}
                >
                  Live page <OpenInNewIcon sx={{ ml: 0.7, fontSize: "1rem" }} />
                </CustomButton>
                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{
                    ml: 2,
                    fontSize: "1rem",
                    textTransform: "none",

                    fontFamily: "TheSeasons-Regular, serif",
                    letterSpacing: "0.07em",
                  }}
                  href="https://github.com/Flame787/Tolkien"
                  target="_blank"
                >
                  GitHub <OpenInNewIcon sx={{ ml: 0.7, fontSize: "1rem" }} />
                </CustomButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Project 4 */}

        <Grid item xs={12} sx={{ mb: 6 }} id="project4">
          <Card
            sx={{
              maxWidth: "100%",
              margin: "0 auto",
              wordWrap: "break-word",
              borderRadius: 4,
              transition: "border 0.3s ease",
              boxShadow:
                "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
              border: "1px solid transparent",
              "&:hover": {
                border: "1.3px solid rgba(76, 201, 254, 0.4)",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                textAlign: "center",
                mt: 4,
                mb: 4,
                color: "primary.title3",
                fontSize: "1.5rem",
                fontFamily: "Marcellus-Regular, serif",
              }}
            >
              Developer Portfolio
            </Typography>

            <CardMedia>
              <Box
                sx={{
                  width: "100%",
                  height: {
                    xs: 220 + 20,
                    sm: 320 + 30,
                    md: 420 + 40,
                    lg: 520,
                  },
                  overflow: "hidden",
                  pl: 4,
                  pr: 4,
                  pb: { xs: 0, sm: 0, md: 0 },
                  "& .slick-dots": {
                    bottom: -50,
                  },
                  "& .slick-dots li button:before": {
                    fontSize: "12px",
                    color: "#34a8d9",
                  },
                  "& .slick-dots li.slick-active button:before": {
                    color: "#34a8d9",
                  },
                }}
              >
                <Slider {...settings}>
                  {images3.map((src, i) => (
                    <Box
                      key={i}
                      component="img"
                      src={src}
                      alt={`Slide ${i + 1}`}
                      sx={{
                        width: "100%",
                        height: { xs: 150, sm: 250, md: 350, lg: 450 },
                        objectFit: "contain",
                        borderRadius: 4,
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setSelectedImage(selectedImage === src ? null : src)
                      }
                    />
                  ))}
                </Slider>
              </Box>
            </CardMedia>
            <CardContent>
              <CustomTypography>
                This Developer Portfolio is a personal showcase built with
                React, designed to present my web development projects in a
                clean, responsive, and user-friendly layout.
              </CustomTypography>
              <CustomTypography>
                It uses React Router for seamless navigation, Material UI for
                modern and consistent design components, and EmailJS to enable
                users to get in touch directly via a built-in contact form.
              </CustomTypography>
              <CustomTypography>
                The app also supports theme switching, allowing users to
                personalize the visual experience by choosing a black or white
                theme. This single-page application is fully responsive and
                optimized for accessibility and performance across devices.
              </CustomTypography>
              <CustomTypography>
                Technologies:
                <button className="round">React</button>
                <button className="round">React Router</button>
                <button className="round">Material UI</button>
                <button className="round">EmailJS</button>
              </CustomTypography>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <CustomButton
                  component={Link}
                  to="#home"
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "none",

                    fontFamily: "TheSeasons-Regular, serif",
                    letterSpacing: "0.07em",
                  }}
                >
                  Home
                </CustomButton>
                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{
                    ml: 2,
                    fontSize: "1rem",
                    textTransform: "none",

                    fontFamily: "TheSeasons-Regular, serif",
                    letterSpacing: "0.07em",
                  }}
                  href="https://github.com/Flame787/Portfolio-page"
                  target="_blank"
                >
                  GitHub <OpenInNewIcon sx={{ ml: 0.7, fontSize: "1rem" }} />
                </CustomButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Lightbox modal */}
      <Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={selectedImage}
          alt="Selected"
          sx={{
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
            borderRadius: 2,
            cursor: "pointer",
          }}
          onClick={() => setSelectedImage(null)}
        />
      </Modal>
    </Box>
  );
}
