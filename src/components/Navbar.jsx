import { AppBar, Toolbar, Typography, Button, Switch } from "@mui/material";
import { Link } from 'react-router-dom';

export default function Navbar({ darkMode, handleThemeToggle }){
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}>
Dev Portfolio
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="#projects">Projects</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
                <Switch checked={darkMode} onChange={handleThemeToggle} />
            </Toolbar>

        </AppBar>
    )

}