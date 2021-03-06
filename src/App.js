import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Components/Header";
import PlaceToVisit from "./Components/PlaceToVisit";

const useStyles = makeStyles(() => ({
  background: {
    height: "100%",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/Assets/bg.jpg"})`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "cover",
  },
}));

const App = () => {
  const { background } = useStyles();

  return (
    <div className={background}>
      <CssBaseline />
      <Header/>
      <PlaceToVisit/>
    </div>
  );
};

export default App;
