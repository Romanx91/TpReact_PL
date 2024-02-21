import React from "react";
import accounting from "accounting";
import Button from "@mui/material/Button";
import "./TotalItem.css";
import { getBasketTotal } from "../../Reducer";
import { useStateValue } from "../../StateProvider";
import { useNavigate } from "react-router-dom";

const TotalItem = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const handleCheckoutClick = () => {
    navigate("/Checkout"); // Navega a la página de registro
  };
  return (
    <div className="totalitem">
      <h3>Productos: {basket?.length}</h3>
      <h3>Precio total: {accounting.formatMoney(getBasketTotal(basket))}</h3>
      <Button
        className="confirmar"
        variant="contained"
        onClick={handleCheckoutClick}
      >
        <strong>Confirmar</strong>
      </Button>
    </div>
  );
};

export default TotalItem;
