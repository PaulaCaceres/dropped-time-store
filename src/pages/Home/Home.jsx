import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import { Hero } from "../../components";

class HomeRaw extends Component {
  render() {

    return (
      <div className={styles.mainContainer}>
        <Hero />
      </div>
    );
  }
}

export const Home = withStyles(styles)(HomeRaw);
