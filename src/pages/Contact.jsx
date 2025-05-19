import { Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";

export default function Contact() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 6, mb: 4 }}>
        About me
      </Typography>
      <Box id="about-me" sx={{ mt: 2, mb: 2 }}>
        <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
          My programming journey began three years ago, and I quickly become
          deeply interested in <strong>front-end development</strong>.
        </Typography>
        <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
          I'm passionate about learning, solving problems, and building
          responsive, user-friendly and visually engaging web experiences.
        </Typography>
        <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
          My projects are built with <strong>React</strong> and vanilla{" "}
          <strong>JavaScript</strong>, often integrating <strong>APIs</strong>{" "}
          to enhance interactivity.
        </Typography>
        <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
          I enjoy working with modern libraries like React Router and Redux, as
          well as frameworks like Bootstrap, Express.js, and tools such as Git,
          GitHub, SCSS, Material-UI (MUI), Webpack, Vite and Jira.
        </Typography>
        <Typography color="text.secondary" sx={{ marginBottom: 1 }}>
          My goal is to build scalable, modern front-end apps by following best
          practices and writing modular, easily maintainable code.
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ mt: 6, mb: 4 }}>
        Technologies
      </Typography>
      <Box id="projects" sx={{ mt: 2, mb: 2 }}>
        <button className="round">React</button>
        <button className="round">JavaScript</button>
        <button className="round">external APIs</button>
        <button className="round">Scaledrone Websocket</button>
        <button className="round">React Router</button>
        <button className="round">Redux</button>
        <button className="round">Bootstrap</button>
        <button className="round">SCSS</button>
        <button className="round">Material-UI</button>
        <button className="round">Express.js</button>
        <button className="round">EmailJS</button>
        <button className="round">Scaledrone Websocket</button>
        <button className="round">Git</button>
        <button className="round">GitHub</button>
        <button className="round">Webpack</button>
        <button className="round">Vite</button>
        <button className="round">Jira</button>
        <button className="round">HTML</button>
        <button className="round">CSS</button>
        <button className="round">Visual Studio Code</button>
      </Box>

      <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
        Skills
      </Typography>
      <Box id="projects" sx={{ mt: 2, mb: 2 }}>
        <button className="round">Agile</button>
        <button className="round">Problem solving</button>
        <button className="round">PC hardware</button>
        <button className="round">MS Office</button>
        <button className="round">Python - basic</button>
        <button className="round">English</button>
        <button className="round">German</button>
        <button className="round">Mentoring</button>
        <button className="round">Organisation skills</button>
      </Box>

      <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
        My GitHub Activity
      </Typography>
      <Box id="projects" sx={{ mt: 6, mb: 4 }}>
        <img
          src="https://ghchart.rshah.org/Flame787"
          alt="GitHub Activity Chart"
          className="github-chart"
        ></img>
      </Box>

      <Box sx={{ mt: 3, mb: 1, ml: 3.5, textAlign: "left" }}>
        <CustomButton
          variant="contained"
          color="primary"
          size="large"
          sx={{ fontFamily: "Kenfolg Serif" }}
          href="https://github.com/Flame787"
          target="_blank"
        >
          Github
        </CustomButton>
      </Box>

      <Typography variant="h4" sx={{ mt: 6, mb: 4 }}>
        Get in touch via email or social media
      </Typography>
    </Container>
  );
}
