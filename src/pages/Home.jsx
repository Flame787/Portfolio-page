import {
  Container,
  Typography,
} from "@mui/material";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        {/* gutterBottom - adds margin under h3-element */}
        Welcome to my portfolio
      </Typography>
      <Typography>This is the home page.</Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        pariatur aspernatur, optio laboriosam, deleniti quos ex tempora
        reiciendis autem explicabo illum quo iste rerum quis consequuntur
        expedita harum obcaecati atque?
      </Typography>

      {/* Projects section */}
      <Projects />
      
    </Container>
  );
}
