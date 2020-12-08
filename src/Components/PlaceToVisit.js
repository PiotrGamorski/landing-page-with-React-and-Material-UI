import React from "react";
import { makeStyles } from "@material-ui/core";
import ImageCard from "./ImageCard";
import places from "../Static/places";
import useWindowPosition from "../Hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
}));

const PlaceToVisit = () => {
  const classes = useStyles();
  const checked = useWindowPosition("header");

  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
    </div>
  );
};

export default PlaceToVisit;
