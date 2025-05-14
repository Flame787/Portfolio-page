import { Box, Container, Typography, Link, Grid } from "@mui/material";
// import Grid from '@mui/material/Grid';
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", color: "white", py: 4, mt: 4 }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          {/* Left Section: Info */}
          {/* <Grid xs={12} sm={6}> */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="body2" align="left">
              © {new Date().getFullYear()} Marina Brezovic. All Rights Reserved.
            </Typography>
            <Typography variant="body2" align="left" sx={{ mt: 2 }}>
              This page was built with React and MUI.
            </Typography>
          </Grid>

          {/* Right Section: Social Links */}
          <Grid
            size={{ xs: 12, sm: 6 }}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Link
              href="https://github.com/Flame787"
              target="_blank"
              sx={{ color: "white", mx: 2 }}
            >
              <GitHub fontSize="large" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/marina-brezovic-210b583b"
              target="_blank"
              sx={{ color: "white", mx: 2 }}
            >
              <LinkedIn fontSize="large" />
            </Link>
            <Link
              href="mailto:mbrezovic77@gmail.com"
              sx={{ color: "white", mx: 2 }}
            >
              <Email fontSize="large" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
