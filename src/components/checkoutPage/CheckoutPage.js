import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CheckoutCard from "../checkoutCard/CheckoutCard";

import Typography from "@mui/material/Typography";
import TotalItem from "../calculation/TotalItem";

import "./CheckoutPage.css";

import { useStateValue } from "../../StateProvider";

export default function Dashboard() {
  const [{ basket }, dispatch] = useStateValue();
  function FormRow() {
    return (
      <React.Fragment>
        <Grid container spacing={9}>
          {basket?.map((item) => (
            <Grid item xs={12} sm={9} md={6} lg={3}>
              <CheckoutCard key={item.id} card={item} />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Box className="box" sx={{ flexGrow: 5, marginTop: 15 }}>
      <Grid container spacing={4} className="container">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            <strong>Productos del carrito</strong>
          </Typography>
        </Grid>
        <Grid
          align="center"
          justify="center"
          className="contCard"
          item
          xs={10}
          sm={9}
          lg={9}
        >
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TotalItem />
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
    </Box>
  );
}
