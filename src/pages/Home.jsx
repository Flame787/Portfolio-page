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
        </Box>,
      </Typography>
      <Typography
        sx={{
          mt: 4,
          mb: 1,
          textAlign: "center",
          // fontFamily: "Marcellus-Regular, serif",
          // fontFamily: "Lato-Regular, sans-serif",
          fontFamily: "Mulish-Extralight, sans-serif",
          fontSize: "1.2rem",
          // letterSpacing: "0.03em",
        }}
      >
        a front-end developer passionate about creating
      </Typography>
      <Typography
        sx={{
          mt: 1,
          mb: 4,
          textAlign: "center",
          // fontFamily: "Marcellus-Regular, serif",
          // fontFamily: "Lato-Regular, sans-serif",
          fontFamily: "Mulish-Extralight, sans-serif",
          fontSize: "1.2rem",
          // letterSpacing: "0.03em",
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
          // gap: 6,
        }}
        direction={{ xs: "column", sm: "column", md: "row" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{
            flexBasis: "50%",
            ml: { xs: 0, md: 6 },
            mr: 6,
            mt: 0,
            mb: 0,
            lineHeight: 0,
          }}
        >
          <img
            src={darkMode ? "/732.png" : "/730.png"}
            alt="code"
            style={{
              width: "114%",
              // maxWidth: "530px",
              borderRadius: "16px",
              display: "inline-block",
              margin: "0 auto",
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
            ml: 6,
            mr: 6,
            // border: "1px solid #4CC9FE",
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
              // fontFamily: "Lato-Regular, sans-serif",
              fontFamily: "Mulish-Extralight, sans-serif",
              fontSize: "1rem",
              textAlign: "justify"
              // letterSpacing: "0.01em",
              // fontSize: "0.875rem"
            }}
          >
            My programming journey began three years ago, as I was working on early
            projects, which led me to explore and enjoy front-end development.
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              marginBottom: 1,
              // fontFamily: "Lato-Light, sans-serif",
              fontFamily: "Mulish-Extralight, sans-serif",
              fontSize: "1rem",
              textAlign: "justify"
            }}
          >
            I'm enthusiastic about learning, solving problems, and creating
            responsive, user-friendly and visually engaging web experiences.
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              marginBottom: 1,
              // fontFamily: "Lato-Light, sans-serif",
              fontFamily: "Mulish-Extralight, sans-serif",
              fontSize: "1rem",
              textAlign: "justify"
              // letterSpacing: "0.03em",
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
              textAlign: "justify"
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
              textAlign: "justify"
            }}
          >
            My goal is to build scalable, modern front-end apps by following
            best practices and writing modular, easily maintainable code.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
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
                // fontFamily: "Mulish-Extralight, sans-serif",
                // fontFamily: "Marcellus-Regular, serif",
                // fontFamily: "Satoshi-Bold, sans-serif",
                // fontFamily: "Satoshi-Regular, sans-serif",
                fontSize: "1rem",
                textTransform: "none",
                //  fontWeight: "bold", 
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
                // fontSize: "0.9rem",
                // fontFamily: "Mulish-Extralight, sans-serif",
                // fontFamily: "Marcellus-Regular, serif",
                // fontFamily: "Satoshi-Bold, sans-serif",
                // fontFamily: "Satoshi-Regular, sans-serif",
                fontSize: "1rem",
                textTransform: "none",
                //  fontWeight: "bold",
                
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
                // fontSize: "0.9rem",
                // fontFamily: "Mulish-Extralight, sans-serif",
                // fontFamily: "Marcellus-Regular, serif",
                // fontFamily: "Satoshi-Bold, sans-serif",
                // fontFamily: "Satoshi-Regular, sans-serif",
                fontSize: "1rem",
                textTransform: "none",
                // fontWeight: "bold",
                
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
