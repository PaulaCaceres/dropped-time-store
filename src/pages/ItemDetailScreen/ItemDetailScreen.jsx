import React from "react";
import { useParams } from 'react-router-dom'
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import { ItemDetailContainer } from "../../components";

const ItemDetailScreenRaw = () => {
  const { id } = useParams();
  return (
    <div className={styles.mainContainer}>
      <ItemDetailContainer productId={id} />
    </div>
  )
}

export const ItemDetailScreen = withStyles(styles)(ItemDetailScreenRaw);