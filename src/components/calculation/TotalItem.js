import React from "react";
import accounting from "accounting";
import Button from "@mui/material/Button";
import "./TotalItem.css";
import { getBasketTotal } from "../../Reducer";
import { useStateValue } from "../../StateProvider";

const TotalItem = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="totalitem">
      <h3>Productos: {basket?.length}</h3>
      <h3>Precio total: {accounting.formatMoney(getBasketTotal(basket))}</h3>
      <Button className="confirmar" variant="contained">
        <strong>Confirmar</strong>
      </Button>
    </div>
  );
};

export default TotalItem;
