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
  "TypeScript",
  "React Router",
  "TanStack Query",
  "Redux",
  "EmailJS",
  "Chart.js",
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "Material-UI",
  "Jest",
  "React Testing Library",
  "Webpack",
  "Vite",

  "API integrations",
  "Express.js",
  "Websockets - Scaledrone",
  "MySQL",
  "Python - basic",

  "Git",
  "GitHub",
  "Visual Studio Code",
  "Netlify",
  "Render",
  "Cloudflare",
  "Postman",
  "IBM API Connect",

  "Bash scripting",
  "PC Hardware diagnostics",
  "MS Dynamics 365 CRM",
  "MS Office tools",
  "MS Teams",
  "Slack",
  "Jira",
  "Miro board",
  "Canva",
  "Agile methodologies",

  "Analytical thinking",
  "Problem solving",
  "Organisational skills",
  "Mentoring",
  "Presentation skills",
  "Attention to detail",

  "English - C1",
  "German - C1",
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
            I am a frontend developer specializing in React, JavaScript, and
            TypeScript, with experience in building scalable, user-focused web
            applications.
          </CustomTypography>
          <CustomTypography color="text.secondary" sx={{ marginBottom: 1 }}>
            Over the past few years, I have consistently advanced my programming
            skills through hands-on work on several full-stack projects using
            modern JavaScript technologies.
          </CustomTypography>
          <CustomTypography color="text.secondary" sx={{ marginBottom: 1 }}>
            I have experience integrating REST APIs and working with a broad
            range of frontend tools, including React Router, Tanstack Query,
            Redux, SCSS, Bootstrap, Material UI, Vite, and Jest, alongside
            backend technologies such as Express.js and MySQL. In addition, I
            have hands-on experience with Shell scripting and basic proficiency
            in Python.
          </CustomTypography>

          <CustomTypography color="text.secondary" sx={{ marginBottom: 1 }}>
            I am highly motivated to create modern, scalable, and intuitive
            digital solutions, and I bring a proactive, adaptable, and
            problem-solving mindset to software development. I also have
            valuable hands-on experience in project planning and effective
            collaboration with stakeholders in an agile environment.
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
