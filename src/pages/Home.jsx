import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Projects from "../components/Projects";

export default function Home({ darkMode }) {
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
    <Container id="home">
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mt: 8, mb: 4, textAlign: "center" }}
        fontFamily={"TheSeasons-Regular, serif"}
      >
        {/* gutterBottom - adds margin under h3-element */}
        {/* sx={{ mt: 6 }} - adding style: margin-top: 6 x 8px = 48px */}
        Hi, I´m{" "}
        <Box component="span" sx={{ color: "primary.title" }}>
          Marina
        </Box>
      </Typography>
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
          mb: 4,
          textAlign: "center",
          fontFamily: "Mulish-Extralight, sans-serif",
          fontSize: "1.2rem",
        }}
      >
        interactive, API-driven interfaces with React and modern JavaScript.
      </Typography>

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
            src={darkMode ? "/732.png" : "/730.png"}
            alt="code"
            sx={{
              width: "100%",
              maxWidth: "487px",
              borderRadius: "16px",
              boxShadow:
                "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{
            flexBasis: "50%",
            ml: { xs: 2, sm: 2, md: 0, lg: 0 },
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
            I also apply modern libraries like React Router, Redux, Material-UI
            (MUI), or frameworks such as Bootstrap, Express.js, and many other
            tools like SCSS, Webpack etc.
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
              to="/contact#about"
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
            >
              GitHub
            </CustomButton>
          </Box>
        </Grid>
      </Grid>

      {/* Projects section */}
      <Projects />
    </Container>
  );
}
