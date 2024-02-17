import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import accounting from "accounting";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="WarGreymon Promo P-050 Digimon Promotion Cards – Next Adventure" />
      <CardMedia
        component="img"
        width="345"
        height="475"
        image="https://phoenixreborn.com.ar/wp-content/uploads/2023/05/P-050.png"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          In stock
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to Cart">
          <AddShoppingCartIcon />
        </IconButton>
        <Typography color={red}>AR {accounting.formatMoney(1500)}</Typography>
      </CardActions>
    </Card>
  );
}
