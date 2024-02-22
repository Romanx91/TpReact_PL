import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Today } from "@mui/icons-material";
import CheckoutCard from "../checkoutCard/CheckoutCard";
import { useStateValue } from "../../StateProvider";
import accounting from "accounting";
import { getBasketTotal } from "../../Reducer";

const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 2",
    desc: "Another thing",
    price: "$3.45",
  },
  {
    name: "Product 3",
    desc: "Something else",
    price: "$6.51",
  },
  {
    name: "Product 4",
    desc: "Best thing of all",
    price: "$14.11",
  },
  { name: "Shipping", desc: "", price: "Free" },
];

const addresses = [];
const payments = [
  { name: "Fecha", detail: ".." },
  { name: "Retirar en:", detail: "Deposito" },
];

export default function Review() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Box
      sx={{
        marginTop: "15vh",
        width: "60vh",
        position: "absolute", // Ajuste para que tenga su propio tamaño
        p: 2,
        height: "auto", // Ajuste para que se ajuste al contenido
        top: "50%", // Centra verticalmente en la pantalla
        left: "50%", // Centra horizontalmente en la pantalla
        transform: "translate(-50%, -50%)", // Centra en la pantalla
        border: "2px solid",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        <strong>Orden de retiro</strong>
      </Typography>
      <List disablePadding>
        {basket?.map((item) => (
          <ListItem
            key={item.name}
            sx={{ py: 1, px: 0, borderBlockEnd: "solid 1px" }}
          >
            <ListItemText primary={item.name} />
            <Typography variant="body2">
              {accounting.formatMoney(item.price)}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0, borderBlockEnd: "solid 1px" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {accounting.formatMoney(getBasketTotal(basket))}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            CardsBattleQuests
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalle de orden
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
