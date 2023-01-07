import "./App.css";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <Box mr={3}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" className={classes.title}>
            React MaterialUI site
          </Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">
              Log In
            </Button>
          </Box>
          <Button color="secondary" variant="contained">
            Sign Up
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
