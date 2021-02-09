import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Collapse } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 240,
    component: "img",
    alt: "Contemplative Reptile",
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "0.5rem",
    color: "#ddd",
    textAlign: "justify",
  },
});

const ImageCard = ({ place, checked }) => {
  const classes = useStyles();

  return (
    <Collapse
    in={checked}
    collapsedHeight={10}
    {...(checked ?  {timeout: 2500} : {})}
    >
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
};

export default ImageCard;
