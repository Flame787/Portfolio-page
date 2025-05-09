import { Box, Container, Typography, Link, Grid } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "white", py: 4, mt: 4 }}>
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          {/* Left Section: Info */}
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="left">
              © {new Date().getFullYear()} Your Name. All Rights Reserved.
            </Typography>
            <Typography variant="body2" align="left">
              This is my personal portfolio built with React and MUI.
            </Typography>
          </Grid>

          {/* Right Section: Social Links */}
          <Grid item xs={12} sm={6} display="flex" justifyContent="flex-end" alignItems="center">
            <Link href="https://github.com/username" target="_blank" sx={{ color: "white", mx: 2 }}>
              <GitHub fontSize="large" />
            </Link>
            <Link href="https://www.linkedin.com/in/username" target="_blank" sx={{ color: "white", mx: 2 }}>
              <LinkedIn fontSize="large" />
            </Link>
            <Link href="mailto:your.email@example.com" sx={{ color: "white", mx: 2 }}>
              <Email fontSize="large" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}