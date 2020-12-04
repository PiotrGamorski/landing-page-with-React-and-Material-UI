import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Components/Header";

const useStyles = makeStyles(() => ({
  background: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/Assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const App = () => {
  const { background } = useStyles();

  return (
    <div className={background}>
      <CssBaseline />
      <Header/>
    </div>
  );
};

export default App;
