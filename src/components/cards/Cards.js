import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { actionTypes } from "../../Reducer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import accounting from "accounting";
import "./Cards.css";
import { useStateValue } from "../../StateProvider";

export default function Cards({ card: { id, name, price, cantidad, imagen } }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        name: name,
        price: price,
        imagen: imagen,
      },
    });
  };

  return (
    <Card sx={{ maxWidth: 430, maxHeigh: 600 }} className="fond">
      <CardHeader
        className="tilt"
        title={<strong>{name}</strong>}
        align="center"
        justify="center"
      />
      <CardMedia component="img" image={imagen} />

      <CardActions disableSpacing className="tilt2">
        <IconButton aria-label="add to Cart" onClick={addToBasket}>
          <AddShoppingCartIcon />
        </IconButton>
        <Typography variant="h6">
          <strong>ARS {accounting.formatMoney(price)}</strong>
        </Typography>
        <Typography color="black" variant="h7">
          <strong>En stock: {cantidad}</strong>
        </Typography>
      </CardActions>
    </Card>
  );
}
