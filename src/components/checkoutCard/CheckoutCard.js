import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { actionTypes } from "../../Reducer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useStateValue } from "../../StateProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import accounting from "accounting";
import "./CheckoutCard.css";

export default function CheckoutCard({ card: { id, name, price, imagen } }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id,
    });

  return (
    <Card sx={{ maxWidth: 430, maxHeigh: 600 }}>
      <CardHeader
        className="tilt"
        title={<strong>{name}</strong>}
        align="center"
        justify="center"
      />
      <CardMedia component="img" image={imagen} />
      <CardActions disableSpacing className="tilt2">
        <IconButton aria-label="add to Cart">
          <DeleteIcon onClick={removeItem} />
        </IconButton>
        <Typography variant="h6">
          <strong>ARS {accounting.formatMoney(price)}</strong>
        </Typography>
      </CardActions>
    </Card>
  );
}
