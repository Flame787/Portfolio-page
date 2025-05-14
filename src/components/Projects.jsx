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

export default function Projects() {
  return (
    <Box id="projects" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 4 }} fontFamily={"Kenfolg Serif"}>
        Projects
      </Typography>
      <Typography>Here are some of the projects I’ve worked on:</Typography>

      {/* Grid for project cards */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Project 1 */}
        {/* <Grid size={{ xs: 12, sm: 6, md: 4 }}> */}
        {/* <Grid size={{ xs: 12 }}> */}
        <Grid item xs={12}>
          <Card>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: "center", mt: 2, mb: 3 }} 
            >
              React Chat App with Scaledrone Websocket
            </Typography>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300"
              alt="Project 1"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2 }}
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
                sx={{ mt: 2, mb: 2 }}
              >
                After entering a username and selecting an avatar, users can
                choose from themed chat rooms where they can interact with
                currently active participants.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2 }}
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
                sx={{ mt: 2, mb: 2 }}
              >
                Technologies:{" "}
                <strong>
                  React, Scaledrone Websocket, external REST APIs{" "}
                </strong>
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button variant="contained" color="primary">
                  GitHub
                </Button>
                <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                  Live Demo
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Project 2 */}
        {/* <Grid size={{ xs: 12 }}> */}
        <Grid item xs={12}>
          <Card>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: "center", mt: 2, mb: 3 }}
            >
              Music Search App powered by Spotify API
            </Typography>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300"
              alt="Project 2"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2 }}
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
                sx={{ mt: 2, mb: 2 }}
              >
                Users can search for music artists, songs, and albums, listen to
                30-second previews of individual tracks or full albums, like and
                save tracks to a favorites playlist, and access full songs or
                artist details via external Spotify links.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2 }}
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
                sx={{ mt: 2, mb: 2 }}
              >
                Technologies:{" "}
                <strong>
                  JavaScript, SCSS, external REST APIs, Express.js{" "}
                </strong>
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button variant="contained" color="primary">
                  GitHub
                </Button>
                <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                  Live Demo
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Project 3 */}
        {/* <Grid size={{ xs: 12 }}> */}
        <Grid item xs={12}>
          <Card>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: "center", mt: 2, mb: 3 }}
            >
              Tolkien info page using OpenLibrary API
            </Typography>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300"
              alt="Project 3"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2 }}
              >
                A fan-made landing page dedicated to J.R.R. Tolkien’s legacy,
                featuring biographical information, his published works,
                illustrations and external resources.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2 }}
              >
                One of my earlier projects, recently refreshed with improved
                layout and updated code.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2 }}
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
                sx={{ mt: 2, mb: 2 }}
              >
                Technologies:{" "}
                <strong>JavaScript, Bootstrap, external REST APIs </strong>
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button variant="contained" color="primary">
                  GitHub
                </Button>
                <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                  Live Demo
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Project 4 */}
        {/* <Grid size={{ xs: 12 }}> */}
        <Grid item xs={12}>
          <Card>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: "center", mt: 2, mb: 3 }}
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
                sx={{ mt: 2, mb: 2 }}
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
                sx={{ mt: 2, mb: 2 }}
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
                sx={{ mt: 2, mb: 2 }}
              >
                The app also features theme switching, allowing users to
                personalize the visual experience. This single-page application
                is fully responsive and optimized for accessibility and
                performance across devices.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 2 }}
              >
                Technologies:{" "}
                <strong>React, React Router, Material UI, EmailJS </strong>
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button variant="contained" color="primary">
                  GitHub
                </Button>
                <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                  Live Demo
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Button to the Contact page */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          color="primary"
          size="large"
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
}
