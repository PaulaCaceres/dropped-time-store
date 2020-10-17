import React from "react";
import { useParams } from 'react-router-dom'
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import { ItemDetailContainer } from "../../components";

const ItemDetailScreenRaw = () => {
  const { id } = useParams();
  console.log('id', id);
  return (
    <div className={styles.mainContainer}>
      <ItemDetailContainer productId={id} />
    </div>
  )
}

export const ItemDetailScreen = withStyles(styles)(ItemDetailScreenRaw);