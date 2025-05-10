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
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Typography>Here are some of the projects I’ve worked on:</Typography>

      {/* Grid for project cards */}
      <Grid container spacing={4} sx={{ mt: 4 }}>

        {/* Project 1 */}
        {/* <Grid size={{ xs: 12, sm: 6, md: 4 }}> */}
        <Grid size={{ xs: 12 }}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300"
              alt="Project 1"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Project 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A brief description of project 1. It includes features X, Y, and
                Z.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                View Project
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Project 2 */}
        <Grid size={{ xs: 12 }}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300"
              alt="Project 2"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Project 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A brief description of project 2. It features unique
                functionality.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                View Project
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Project 3 */}
        <Grid size={{ xs: 12 }}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300"
              alt="Project 3"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Project 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A brief description of project 3. It is focused on aspect A, B,
                and C.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                View Project
              </Button>
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
