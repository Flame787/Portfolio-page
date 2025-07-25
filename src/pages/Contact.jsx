import { Container, Typography, Box, Grid } from "@mui/material";
import CustomButton from "../components/CustomButton";
import ContactForm from "../components/ContactForm";
import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CustomTypography from "../components/CustomTypography";

const mySkills = [
  "React",
  "JavaScript",
  "API integrations",
  "React Router",
  "Redux",
  "Scaledrone Websocket",
  "Bootstrap",
  "SCSS",
  "Material-UI",
  "Express.js",
  "EmailJS",
  "Chart.js",
  "Git",
  "GitHub",
  "Webpack",
  "Vite",
  "Jira",
  "HTML",
  "CSS",
  "Visual Studio Code",
  "Canva",
  "Agile",
  "Python - basic",
  "PC hardware",
  "MS Office",
  "Problem solving",
  "Organisation skills",
  "Mentoring",
  "English",
  "German",
];

export default function Contact({ darkMode }) {
  //new - for tracking the state of skills:
  const [skills, setSkills] = useState(mySkills);

  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const [triggered, setTriggered] = useState(false);
  const boxRef = useRef(null);

  const timeoutsRef = useRef([]);

  useEffect(() => {
    // fetch real DOM-node. If not avail., just return.
    // If avail., then an IntersectionObserver API is created to follow when element has entered the user viewport.
    // threshold: 0.3 - when 30% of element is visible, callback is started.
    // Callback gets 'entry' and we check if entry.isIntersecting is true - if yes, then change state: setTriggered(true).
    const node = boxRef.current;
    if (!node || triggered) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    // connecting observer with real DOM-element to track it's visibility (when the element gets into user viewport)

    // if (boxRef.current) {
    //   observer.observe(boxRef.current);
    // }

    //   return () => {
    //     if (boxRef.current) observer.unobserve(boxRef.current);
    //     // clear timeouts when component unmounts:
    //     timeoutsRef.current.forEach(clearTimeout);
    //   };
    // }, [triggered]);

    return () => {
      observer.unobserve(node);
      timeoutsRef.current.forEach(clearTimeout);
    };
    // previously, eslint issue:
  }, [triggered]);

  // new (runAnimation-function is memorized until 'skills' changes, and doesn't have to be recreated on each render)
  // -> avoid Eslint warning:
  const runAnimation = useCallback(() => {
    setVisibleIndexes([]);
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    skills.forEach((_, i) => {
      const timeoutId = setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, i]);
      }, i * 100);
      timeoutsRef.current.push(timeoutId);
    });
  }, [skills]);

  // useEffect(() => {
  //   if (triggered) {
  //     skills.forEach((_, i) => {
  //       setTimeout(() => {
  //         setVisibleIndexes((prev) => [...prev, i]);
  //       }, i * 100);
  //     });
  //   }
  // }, [triggered]);

  // when triggered becomes true or skills change and triggered is true:
  useEffect(() => {
    if (triggered) {
      runAnimation();
    }
  }, [triggered, runAnimation]);

  // sort alfabetically - ascending & show animation if element is visible:
  const sortAsc = () => {
    const sorted = [...skills].sort((a, b) => a.localeCompare(b));
    setSkills(sorted);
  };

  // sort alfabetically - descending & show animation if element is visible:
  const sortDesc = () => {
    const sorted = [...skills].sort((a, b) => b.localeCompare(a));
    setSkills(sorted);
  };

  const resetOrder = () => {
    setSkills(mySkills);
  };

  // enable scrolling:
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const section = document.getElementById(location.hash.substring(1));
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, [location]);

  return (
    <Container id="about" sx={{ scrollMarginTop: "100px" }}>
      <Typography
        id="aboutme"
        // variant="h4"
        gutterBottom
        sx={{
          scrollMarginTop: "100px",
          mt: 6,
          mb: 4,

          textAlign: "center",

          fontSize: {
            xs: "1.6rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2rem",
          },
        }}
        fontFamily={"TheSeasons-Regular, serif"}
      >
        About me
      </Typography>
      <Grid
        sx={{
          mt: 2,
          mb: 2,
          p: 2,
          backgroundColor: !darkMode && "rgba(237, 250, 254, 0.6)",
          border: "1px solid transparent",
          "&:hover": {
            border: "1.3px solid rgba(76, 201, 254, 0.4)",
          },
          borderRadius: 4,
          boxShadow:
            "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 6px 20px 0 rgba(76, 201, 254, 0.19)",
        }}
      >
        <Box
          id="about-me-text"
          sx={{
            mt: 2,
            mb: 2,
          }}
        >
          <CustomTypography
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
          </CustomTypography>
          <CustomTypography color="text.secondary" sx={{ marginBottom: 1 }}>
            I'm enthusiastic about learning, solving problems, and creating
            responsive, user-friendly and visually engaging web experiences.
          </CustomTypography>
          <CustomTypography color="text.secondary" sx={{ marginBottom: 1 }}>
            My projects are built with React and JavaScript, often integrating
            APIs to enhance interactivity.
          </CustomTypography>
          <CustomTypography color="text.secondary" sx={{ marginBottom: 1 }}>
            I also apply modern libraries like React Router, Redux, Material-UI
            (MUI), or frameworks such as Bootstrap, Express.js, and many other
            tools like SCSS, Webpack etc.
          </CustomTypography>
          <CustomTypography color="text.secondary" sx={{ marginBottom: 1 }}>
            My goal is to build scalable, modern front-end apps by following
            best practices and writing modular, easily maintainable code.
          </CustomTypography>
        </Box>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 8,
        }}
      >
        <Box
          id="skillsicon"
          component="img"
          src={darkMode ? "/skills4.png" : "/skills-light.png"}
          alt="code"
          sx={{
            width: "10%",
            minWidth: "108px",
            borderRadius: "6px",

            boxShadow:
              "4px 4px 8px 0 rgba(76, 201, 254, 0.2), 0 2px 5px 0 rgba(76, 201, 254, 0.19)",
            scrollMarginTop: "90px", // redirects from 'My skills'-button exactly before starting of the Skills-icon
          }}
        />
      </Grid>
      <Typography
        gutterBottom
        sx={{
          mt: 6,
          mb: 6,
          textAlign: "center",
          fontSize: {
            xs: "1.6rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2rem",
          },
        }}
        fontFamily={"TheSeasons-Regular, serif"}
      >
        My skills
      </Typography>

      <Box sx={{ mb: 4, textAlign: "center" }}>
        <CustomButton onClick={sortAsc} sx={{ color: "white" }}>
          Sort A-Z
        </CustomButton>
        <CustomButton onClick={sortDesc} sx={{ ml: 4, color: "white" }}>
          Sort Z-A
        </CustomButton>
        <CustomButton
          variant="outlined"
          onClick={resetOrder}
          sx={{ ml: 4, color: "white" }}
        >
          Reset
        </CustomButton>
      </Box>

      <Box
        id="skills"
        ref={boxRef}
        sx={{
          mt: 2,
          mb: 10,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
          scrollMarginTop: "170px", // not used anymore
        }}
      >
        {skills.map((skill, i) => (
          <button
            key={skill}
            className={`round skill-button ${
              visibleIndexes.includes(i) ? "fade-in" : ""
            }`}
          >
            {skill}
          </button>
        ))}
      </Box>

      <Typography
        gutterBottom
        sx={{
          mt: 6,
          mb: 4,
          textAlign: "center",
          fontSize: {
            xs: "1.6rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2rem",
          },
        }}
        fontFamily={"TheSeasons-Regular, serif"}
      >
        My GitHub activity
      </Typography>
      <Box
        id="github-activity"
        sx={{ mt: 6, mb: 4, display: "flex", justifyContent: "center" }}
      >
        <img
          src="https://ghchart.rshah.org/Flame787"
          alt="GitHub Activity Chart"
          className="github-chart"
          style={{ maxWidth: "100%" }}
        ></img>
      </Box>

      <Box sx={{ mt: 3, mb: 10, textAlign: "center" }}>
        <CustomButton
          variant="contained"
          color="primary"
          sx={{
            fontSize: "1rem",
            textTransform: "none",
            fontFamily: "TheSeasons-Regular, serif",
            letterSpacing: "0.07em",
          }}
          href="https://github.com/Flame787"
          target="_blank"
        >
          Github <OpenInNewIcon sx={{ ml: 0.7, fontSize: "1rem" }} />
        </CustomButton>
      </Box>
      <Box id="contactme">
        <ContactForm darkMode={darkMode} />
      </Box>
    </Container>
  );
}
