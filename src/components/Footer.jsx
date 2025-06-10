import { Box, Container, Typography, Link, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
// import Grid from '@mui/material/Grid';
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Footer({ darkMode }) {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", color: "white", py: 4, mt: 4 }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          {/* Left Section: Info */}
          {/* <Grid xs={12} sm={6}> */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="body2" align="left" sx={{ mt: 2, fontFamily: "Mulish-Extralight, sans-serif" }}>
              © {new Date().getFullYear()} Marina Brezovic. All Rights Reserved.
            </Typography>
            <Typography variant="body2" align="left" sx={{ mt: 1, fontFamily: "Mulish-Extralight, sans-serif" }}>
              This page was built with React and MUI.
            </Typography>
          </Grid>

          {/* Middle Section: Logo */}
          <Grid
            item
            size={{ xs: 12, sm: 4 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src="/Marina-transparent.png"
              alt="logo"
              style={{
                width: "120px",
                height: "auto",
                borderRadius: "4px",
                display: "inline-block",
                margin: "0 4px",
              }}
            ></img>
          </Grid>

          {/* Right Section: Social Links */}
          <Grid
            size={{ xs: 12, sm: 4 }}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Link
              href="https://github.com/Flame787"
              target="_blank"
              title="GitHub"
              sx={{ color: "white", mx: 2 }}
            >
              <GitHub fontSize="large" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/marina-brezovic-210b583b"
              target="_blank"
              title="LinkedIn"
              sx={{ color: "white", mx: 2 }}
            >
              <LinkedIn fontSize="large" />
            </Link>
            <Link
              // href="mailto:mbrezovic77@gmail.com"
              // component={Link}
              component={RouterLink}
              to="/contact#contactme"
              title="Email"
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
