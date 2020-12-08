import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    color: "#5AFF3D",
  },
  container:{
    textAlign: "center",
  },
  title : {
      color: "#fff",
      fontSize: "3rem",

  },
  goDown:{
    color: "#5AFF3D",
    fontSize: "4rem",
  }
}));

const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] =  useState(false);
  useEffect(()=>{
    setChecked(true);
  },[]);

  return (
    <div className={classes.root} id="header">
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

      <Collapse
       in={checked}
       collapsedHeight={50}
       {...(checked ?  {timeout: 1000} : {})}
       >
      <div className={classes.container}>
        <h1 className={classes.title}>
          Welcome to <br /> My <span className={classes.colorText}>Island.</span>
        </h1>
        <IconButton>
          <ExpandMoreIcon className={classes.goDown}/>
        </IconButton>
      </div>
      </Collapse>
    </div>

  );
};

export default Header;
