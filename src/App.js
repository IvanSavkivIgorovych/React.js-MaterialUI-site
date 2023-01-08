import "./App.css";
import React from "react";
import {
  AppBar,
  Box,
  Button,
  CardMedia,
  Card,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
  CardContent,
  CardActions,
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import LayersIcon from "@mui/icons-material/Layers";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";

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
    position: "relative",
    marginBottom: "32px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent: {
    position: "relative",
    color: "white",
    padding: "72px",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: "32px",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              <Button
                color="inherit"
                variant="outlined"
                onClick={handleClickOpen}
              >
                Log In
              </Button>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see videos</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email address"
                    type="email"
                    fullWidth
                  />

                  <TextField
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>

                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Log In
                  </Button>
                </DialogActions>
              </Dialog>
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
                    variant="h4"
                    color="inherit"
                    gutterBottom
                  >
                    React MaterialUI site
                  </Typography>
                  <Typography variant="h6" color="inherit" paragraph>
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

        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              React MaterialUI site
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              architecto explicabo nemo iusto cumque atque vero, delectus,
              facere, sunt iste voluptatem veritatis quisquam perferendis
              commodi? In architecto explicabo nemo iusto cumque atque vero,
              delectus, facere, sunt iste voluptatem veritatis quisquam
              perferendis commodi?
            </Typography>

            <div className={classes.mainButtons}>
              <Grid container spacing={5} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Start now
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum doloribus consequuntur itaque repellendus possimus
                      ipsa?
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>

                    <LayersIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />

          <BottomNavigationAction
            label="Favourites"
            value="favourites"
            icon={<FavoriteIcon />}
          />

          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />

          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>

        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="subtitle1"
        >
          React.js MaterialUI site
        </Typography>
      </footer>
    </>
  );
}

export default App;
