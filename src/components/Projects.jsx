import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomButton from "./CustomButton";

export default function Projects() {
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
    <Box id="projects" sx={{ mt: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mt: 10, mb: 4, textAlign: "center", color: "primary.title" }}
        fontFamily={"Kenfolg Serif"}
      >
        Projects
      </Typography>

      <Typography sx={{ mb: 6, textAlign: "center" }}>
        Here are some of my projects:
      </Typography>

      {/* Grid for project cards */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Project 1 */}
        <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{ mb: 6 }}>
          {/* <Grid size={{ xs: 12 }}> */}
          {/* <Grid item xs={12}> */}
          <Card
            sx={{
              width: "100%",
              margin: "0 auto",
              wordWrap: "break-word",
              borderRadius: 4,
              transition: "border 0.3s ease",
              border: "1px solid transparent",
              "&:hover": {
                border: "1px solid #4CC9FE",
              },
            }}
          >
            {/* <Card sx={{ flexGrow: 1, wordWrap: 'break-word' }}> */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                textAlign: "center",
                mt: 3,
                mb: 3,
                color: "primary.title",
              }}
              fontFamily={"Kenfolg Serif"}
            >
              React Chat App with Scaledrone Websocket
            </Typography>
            {/* <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300"
              alt="Project 1"
            /> */}

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
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                This real-time chat application is built with{" "}
                <strong>
                  <span color="text.primary">React</span>
                </strong>{" "}
                and powered by the{" "}
                <strong>
                  <span color="text.primary">Scaledrone</span>
                </strong>{" "}
                WebSocket for live communication.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                After entering a username and selecting an avatar, users can
                choose from themed chat rooms where they can interact with
                currently active participants.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                The app supports: browsing chat history, using emojis (via
                emoji-picker-react), sending GIFs (via the{" "}
                <strong>
                  <span color="text.primary">Giphy API</span>
                </strong>
                ), and uploading files (handled through{" "}
                <strong>
                  <span color="text.primary">Supabase</span>
                </strong>
                ).
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                Technologies: <button className="round">React</button>
                <button className="round">Scaledrone Websocket</button>
                <button className="round">external API</button>
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{ fontFamily: "Kenfolg Serif" }}
                  href="https://github.com/Flame787/Chat-app-React"
                  target="_blank"
                >
                  GitHub
                </CustomButton>
                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{ ml: 2, fontFamily: "Kenfolg Serif" }}
                >
                  Live Demo
                </CustomButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Project 2 */}
        {/* <Grid size={{ xs: 12 }}> */}
        <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{ mb: 6 }}>
          {/* <Grid item xs={12}> */}
          <Card
            sx={{
              width: "100%",
              margin: "0 auto",
              wordWrap: "break-word",
              borderRadius: 4,
              transition: "border 0.3s ease",
              border: "1px solid transparent",
              "&:hover": {
                border: "1px solid #4CC9FE",
              },
            }}
          >
            {/* <Card sx={{ flexGrow: 1, wordWrap: 'break-word' }}> */}
            <Typography
              variant="h6"
              gutterBottom
              fontFamily={"Kenfolg Serif"}
              sx={{
                textAlign: "center",
                mt: 3,
                mb: 3,
                color: "primary.title",
              }}
            >
              Music Search App powered by Spotify API
            </Typography>
            {/* <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300"
              alt="Project 2"
            /> */}
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
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                <strong>
                  <span color="text.primary">Music Domain</span>
                </strong>{" "}
                is a dynamic music search application that allows users to
                explore artists, albums, and songs using real-time data from the{" "}
                <strong>
                  <span color="text.primary">Spotify API</span>
                </strong>
                .
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                Users can search for music artists, songs, and albums, listen to
                30-second previews of individual tracks or full albums, like and
                save tracks to a favorites playlist, and access full songs or
                artist details via external Spotify links.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                <strong>
                  <span color="text.primary">Express.js</span>
                </strong>{" "}
                is used on the backend for Spotify authentication. The app also
                features 16 different visual themes (styled entirely with SCSS),
                letting users personalize their experience with ease.
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                Technologies:
                <button className="round">JavaScript</button>
                <button className="round">SCSS</button>
                <button className="round">external API</button>
                <button className="round">Express.js</button>
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{ fontFamily: "Kenfolg Serif" }}
                  href="https://github.com/Flame787/Music-app-Spotify-API"
                  target="_blank"
                >
                  GitHub
                </CustomButton>
                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{ ml: 2, fontFamily: "Kenfolg Serif" }}
                >
                  Live Demo
                </CustomButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Project 3 */}
        {/* <Grid size={{ xs: 12 }}> */}
        <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{ mb: 6 }}>
          {/* <Grid item xs={12}> */}
          <Card
            sx={{
              maxWidth: "100%",
              margin: "0 auto",
              wordWrap: "break-word",
              borderRadius: 4,
              transition: "border 0.3s ease",
              border: "1px solid transparent",
              "&:hover": {
                border: "1px solid #4CC9FE",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                textAlign: "center",
                mt: 3,
                mb: 3,
                color: "primary.title",
              }}
              fontFamily={"Kenfolg Serif"}
            >
              Tolkien info page with OpenLibrary API
            </Typography>
            <CardMedia>
              <Box
                sx={{
                  width: "100%",
                  height: {
                    xs: 220,
                    sm: 320,
                    md: 420,
                    lg: 520,
                  },
                  overflow: "hidden",
                  pl: 4,
                  pr: 4,
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
                  <Box
                    component="img"
                    src="/Tolkien1.png"
                    alt="Slide 1"
                    sx={{
                      width: "100%",
                      height: { xs: 150, sm: 250, md: 350, lg: 450 },
                      objectFit: "contain",
                      borderRadius: 4,
                    }}
                  />
                  <Box
                    component="img"
                    src="/Tolkien2.png"
                    alt="Slide 2"
                    sx={{
                      width: "100%",
                      height: { xs: 150, sm: 250, md: 350, lg: 450 },
                      objectFit: "contain",
                      borderRadius: 4,
                    }}
                  />
                  <Box
                    component="img"
                    src="/Tolkien3.png"
                    alt="Slide 3"
                    sx={{
                      width: "100%",
                      height: { xs: 150, sm: 250, md: 350, lg: 450 },
                      objectFit: "contain",
                      borderRadius: 4,
                    }}
                  />
                  <Box
                    component="img"
                    src="/Tolkien4.png"
                    alt="Slide 4"
                    sx={{
                      width: "100%",
                      height: { xs: 150, sm: 250, md: 350, lg: 450 },
                      objectFit: "contain",
                      borderRadius: 4,
                    }}
                  />
                </Slider>
              </Box>
            </CardMedia>
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                A fan-made landing page dedicated to J.R.R. Tolkien’s legacy,
                featuring biographical information, his published works,
                illustrations and external resources.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                One of my earlier projects, recently refreshed with improved
                layout and updated code.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                The application integrates with the{" "}
                <strong>
                  <span color="text.primary">Open Library API</span>
                </strong>{" "}
                to fetch and display books authored by Tolkien, allowing users
                to explore and sort them by current ratings.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                Technologies:
                <strong>
                  <button className="round">JavaScript</button>
                  <button className="round">Bootstrap</button>
                  <button className="round">external API</button>
                </strong>
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{ fontFamily: "Kenfolg Serif" }}
                  href="https://github.com/Flame787/Tolkien"
                  target="_blank"
                >
                  GitHub
                </CustomButton>
                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{ ml: 2, fontFamily: "Kenfolg Serif" }}
                >
                  Live Demo
                </CustomButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Project 4 */}
        {/* <Grid size={{ xs: 12 }}> */}
        <Grid item xs={12} sx={{ mb: 6 }}>
          <Card
            sx={{
              maxWidth: "100%",
              margin: "0 auto",
              wordWrap: "break-word",
              borderRadius: 4,
              transition: "border 0.3s ease",
              border: "1px solid transparent",
              "&:hover": {
                border: "1px solid #4CC9FE",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                textAlign: "center",
                mt: 3,
                mb: 3,
                color: "primary.title",
              }}
              fontFamily={"Kenfolg Serif"}
            >
              Portfolio page
            </Typography>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300"
              alt="Project 4"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                Portfolio Page is a personal showcase built with{" "}
                <strong>
                  <span color="text.primary">React</span>
                </strong>
                , designed to present web development projects in a clean,
                responsive, and user-friendly layout.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                It uses{" "}
                <strong>
                  <span color="text.primary">React Router</span>
                </strong>{" "}
                for seamless navigation,{" "}
                <strong>
                  <span color="text.primary">Material UI</span>
                </strong>{" "}
                for modern and consistent design components, and{" "}
                <strong>
                  <span color="text.primary">EmailJS</span>
                </strong>{" "}
                to enable users to get in touch directly via a built-in contact
                form.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                The app also features theme switching, allowing users to
                personalize the visual experience. This single-page application
                is fully responsive and optimized for accessibility and
                performance across devices.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2, px: 2 }}
              >
                Technologies:
                <strong>
                  <button className="round">React</button>
                  <button className="round">React Router</button>
                  <button className="round">Material UI</button>
                  <button className="round">EmailJS</button>
                </strong>
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{ fontFamily: "Kenfolg Serif" }}
                  href="https://github.com/Flame787/Portfolio-page"
                  target="_blank"
                >
                  GitHub
                </CustomButton>
                <CustomButton
                  variant="contained"
                  color="primary"
                  sx={{ ml: 2, fontFamily: "Kenfolg Serif" }}
                >
                  Live Demo
                </CustomButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Button to the Contact page */}
      <Box sx={{ mt: 3, mb: 4, textAlign: "center" }}>
        <CustomButton
          component={Link}
          to="/contact"
          variant="contained"
          color="primary"
          size="large"
          sx={{ fontFamily: "Kenfolg Serif" }}
        >
          Contact Me
        </CustomButton>
      </Box>
    </Box>
  );
}
