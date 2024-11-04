import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HistoryIcon from "@mui/icons-material/History";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Badge, Button, Dialog, DialogActions, Tab } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getDress } from "../../features/Dress/dressSlice";
import Rent from "../../models/Rent";
import RentSlice, { getRent } from "../../features/Rent/RentSlice";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const cart = useSelector((state: RootState) => state.DressReducer.cart);
  const loginUser = useSelector((state: RootState) => state.userReducer.user);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  React.useEffect(() => {
    dispatch(getDress());
  }, []);
  const dispatch: AppDispatch = useDispatch();
  const rents: Array<Rent> = useSelector(
    (state: RootState) => state.RentReducer.Rents
  ).filter((r) => r.user?.id == loginUser.id);
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const nav = useNavigate();
  return (
    <Box
      sx={{ display: "flex" }}
    >
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "black", height: "12vh" }}
        position="fixed"
      >
        <Toolbar>
          {loginUser.status == 1 || loginUser.status == 0 ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <br></br> <br></br>
          {loginUser.status == 1 ? (
            <>
              <IconButton
                size="large"
                aria-label="show 0 new products"
                color="inherit"
                onClick={() => nav("/ShowCart")}
              >
                <Badge badgeContent={cart.length} color="info">
                <ShoppingCartIcon style={{color:'grey'}}/>
                </Badge>
              </IconButton>
              <br></br> <br></br>
              <HistoryLend />
            </>
          ) : null}
          <br></br> <br></br>
          <NavLink to="p">
            <Tab
              icon={<FavoriteIcon style={{color:'white'}}/>}
              aria-label="favorite"
              className={"navlink"}
            />
          </NavLink>
         
          <NavLink to="contact">
            <Tab icon={<CallIcon style={{color:'white'}}/>} className={"navlink"} />
          </NavLink>
          <NavLink to="">
            <Tab icon={<HomeIcon style={{color:'white'}}/>} className={"navlink"} />
          </NavLink>
          <Button 
            style={{
              width: "5vw",
              height: "1.5vw",
              backgroundColor: "black",
              // marginLeft: "5%",
              color: "white",
              border:"1px solid white"
            }}
          >
            <NavLink to="signIn" style={{ color: "white", fontWeight: "bold" }}>
              Sign in
            </NavLink>{" "}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {loginUser.status == 1 ? (
          <List>
            <Tab icon={<CheckroomIcon />} aria-label="favorite" />
            <Link to="/dresses" style={{ color: "black" }}>
              {"השמלות שלנו "}
            </Link>
            <br></br><br></br>
            
            <Tab
              icon={<AutoStoriesIcon  />}
              aria-label="favorite"
            />
            <Link to="ourStory" style={{ color: "black" }}>
              {"אודותינו"}
          </Link>
            {/* </button> */}
            <br></br>
            <br></br>

            <br></br>
            <br></br>

            {[].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <List>
            <Tab icon={<CheckroomIcon />} aria-label="favorite" />
            <Link to="/dresses" style={{ color: "black" }}>
              שמלות
            </Link>
            {/* </button> */}
            <br></br>
            <br></br>
          
            <Tab icon={<CheckroomIcon />} aria-label="favorite" />
            <Link to="/addDress" style={{ color: "black" }}>
              הוספת שמלה
            </Link>
            <br></br>
            <br></br>
            <Tab icon={<CheckroomIcon />} aria-label="favorite" />
            <Link to="showUsers" style={{ color: "black" }}>
              משתמשים
            </Link>
            {/* </button> */}
            {[].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}

export const HistoryLend = () => {
  React.useEffect(() => {
    dispatch(getRent());
  }, []);
  const dispatch: AppDispatch = useDispatch();
  const Rents = useSelector((state: RootState) => state.RentReducer.Rents);
  const loginUser = useSelector((state: RootState) => state.userReducer.user);
  const rents: Array<Rent> = useSelector(
    (state: RootState) => state.RentReducer.Rents
  ).filter((r) => r.user?.id == loginUser.id);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Tab onClick={() => {setOpen(true)}}
              icon={<HistoryIcon style={{color:'white'}} />}
              aria-label="favorite"
              className={"navlink"}
            />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {rents.map((r) => (
          <Card sx={{ display: "flex" ,width:"20vw",height:"1000000vh",maxHeight:"250px"}}>
              <CardContent >
                <Typography component="div" variant="h5">
                  {r.dress?.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {r.user?.firstName + " " + r.user?.lastName}
                  <br></br>
                  {r.lendingDate?.toString()}
                </Typography>
              </CardContent>
            <CardMedia style={{height:"25vh"}}
              component="img"
              sx={{ width: 151 }}
              image={"image/" + r.dress?.image}
              alt="Live from space album cover"
            />
            <br></br><br></br>
          </Card>
         
        ))}

        <DialogActions>
          <Typography gutterBottom textAlign={"center"}></Typography>
          <Button onClick={handleClose} autoFocus>
            סגור
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
