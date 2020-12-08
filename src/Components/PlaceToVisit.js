import React from "react";
import {makeStyles} from "@material-ui/core";
import ImageCard from "./ImageCard";
import places from "../Static/places"

const useStyles = makeStyles(()=>({
    root: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
    }
}));

const PlaceToVisit = () => {
    const classes = useStyles();

    return (<div className={classes.root}>
        <ImageCard place={places[0]}/>
        <ImageCard place={places[1]}/>

    </div>);
}

export default PlaceToVisit;