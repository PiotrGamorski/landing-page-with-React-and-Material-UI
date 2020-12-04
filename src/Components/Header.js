import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles(() => ({
  appbar: {
      background: "none",

  },
}));

const Header = () => {
  const { appbar } = useStyles();

  return (
    <div>
      <AppBar className={appbar}>
      <Toolbar>
        <h1>MyIsland.</h1>
        <IconButton>
          <SortIcon />
        </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
