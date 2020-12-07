import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: 1,
  },
  colorText: {
    color: "#5AFF",
  },
  container:{
    textAlign: "center",
  },
  title : {
      color: "#fff",
      fontSize: "3rem",

  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <h1 className={classes.title}>
          Welcome to <br /> My <span className={classes.colorText}>Island.</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
