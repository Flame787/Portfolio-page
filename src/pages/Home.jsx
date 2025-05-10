import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Projects from "../components/Projects";

export default function Home() {

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
    <Container>
      <Typography variant="h3" gutterBottom sx={{ mt: 6 }}>
        {/* gutterBottom - adds margin under h3-element */}
        {/* sx={{ mt: 6 }} - adding style: margin-top: 6 x 8px = 48px */}
        Welcome to my portfolio
      </Typography>
      <Typography>This is the home page.</Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        pariatur aspernatur, optio laboriosam, deleniti quos ex tempora
        reiciendis autem explicabo illum quo iste rerum quis consequuntur
        expedita harum obcaecati atque?
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        pariatur aspernatur, optio laboriosam, deleniti quos ex tempora
        reiciendis autem explicabo illum quo iste rerum quis consequuntur
        expedita harum obcaecati atque?
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        pariatur aspernatur, optio laboriosam, deleniti quos ex tempora
        reiciendis autem explicabo illum quo iste rerum quis consequuntur
        expedita harum obcaecati atque?
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        pariatur aspernatur, optio laboriosam, deleniti quos ex tempora
        reiciendis autem explicabo illum quo iste rerum quis consequuntur
        expedita harum obcaecati atque?
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        pariatur aspernatur, optio laboriosam, deleniti quos ex tempora
        reiciendis autem explicabo illum quo iste rerum quis consequuntur
        expedita harum obcaecati atque?
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        pariatur aspernatur, optio laboriosam, deleniti quos ex tempora
        reiciendis autem explicabo illum quo iste rerum quis consequuntur
        expedita harum obcaecati atque?
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        pariatur aspernatur, optio laboriosam, deleniti quos ex tempora
        reiciendis autem explicabo illum quo iste rerum quis consequuntur
        expedita harum obcaecati atque?
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        pariatur aspernatur, optio laboriosam, deleniti quos ex tempora
        reiciendis autem explicabo illum quo iste rerum quis consequuntur
        expedita harum obcaecati atque?
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        pariatur aspernatur, optio laboriosam, deleniti quos ex tempora
        reiciendis autem explicabo illum quo iste rerum quis consequuntur
        expedita harum obcaecati atque?
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        pariatur aspernatur, optio laboriosam, deleniti quos ex tempora
        reiciendis autem explicabo illum quo iste rerum quis consequuntur
        expedita harum obcaecati atque?
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        pariatur aspernatur, optio laboriosam, deleniti quos ex tempora
        reiciendis autem explicabo illum quo iste rerum quis consequuntur
        expedita harum obcaecati atque?
      </Typography>
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
