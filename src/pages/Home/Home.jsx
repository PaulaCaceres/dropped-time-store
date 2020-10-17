import React, { useState, useEffect } from "react";
import { getFirestore } from '../../firebase';
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import { Hero } from "../../components";

const HomeRaw = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items")
    itemCollection.get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log('No data!');
        }
        const queryItems = querySnapshot.docs.map(doc => doc.data())
        setItems(queryItems);
      })
      .catch((error) => {
        console.log("There was an error trying to get items: ", error);
      })

  }, []);

  useEffect(() => {
    console.log(items);
  }, [items])

  return (
    <div className={styles.mainContainer}>
      <Hero />
    </div>
  );
}

export const Home = withStyles(styles)(HomeRaw);
