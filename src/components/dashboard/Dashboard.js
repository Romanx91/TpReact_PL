import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Cards from "../cards/Cards";
import CardFalse from "../datafalse/DataFalse";

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 15 }}>
      <Grid container spacing={8}>
        {CardFalse.map((card) => (
          <Grid item xs={12} sm={9} md={6} lg={3}>
            <Cards key={card.id} card={card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
