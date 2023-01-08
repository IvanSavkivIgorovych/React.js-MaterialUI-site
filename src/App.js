import "./App.css";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    color: "white",
  },
  title: {
    flexGrow: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturesPost: {
    marginBottom: "32px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent: {
    color: "white",
    padding: "72px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky">
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

      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    React MaterialUI site
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    architecto explicabo nemo iusto cumque atque vero, delectus,
                    facere, sunt iste voluptatem veritatis quisquam perferendis
                    commodi?
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>
    </>
  );
}

export default App;
