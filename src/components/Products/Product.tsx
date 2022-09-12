import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { IconButton, Badge, Box } from "@mui/material";

import SellRoundedIcon from "@mui/icons-material/SellRounded";
// Context
import { CartContext } from "../../context/CartContext";

export default function Product(product: any, index: any) {
    const { addProductToCart } = useContext(CartContext);


  let quantity = 1;

//   const addProductToCart = (item: any, quantity: any) => {
//     console.log("🚀 ~ file: Product.tsx ~ line 23 ~ addProductToCart ~ item: any, quantity: any", item, quantity)
//     addProductToCart( item, quantity );
//   };

  return (
    <StyledCard key={product.product.id}>
      <CardMedia
        component="img"
        alt={product.product.category.name}
        height="140"
        image={product.product.category.image}
      />
      <StyledBadge>€{product.product.price}</StyledBadge>
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component={"div"}>
          {product.product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.product.description}
        </Typography>
      </StyledCardContent>
      <CardActions>
        <StyledButton onClick={() => addProductToCart(product.product)} size="small">
          Add to cart
        </StyledButton>
      </CardActions>
    </StyledCard>
  );
}

const StyledCardContent = styled(CardContent)({
  "& > div": {
    color: "#323232",
    fontSize: "22px",
    lineHeight: "35px",
    fontWeight: 700,
    textAlign: "center",
    fontFamily: "'DM Sans',sans-serif",
  },

  "& > p": {
    color: "#616c80",
    fontSize: "18px",
    fontFamily: "'DM Sans',sans-serif",
  },
});

const StyledCard = styled(Card)({
  fontFamily: "'DM Sans',sans-serif",
  // position: "relative",
  display: "flex",
  // width: "100%",
  minHeight: "380px",
  padding: "15px 20px  20px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  boxShadow: "1px 1px 35px 0 rgb(145 158 190 / 16%)",
  transition: "250ms",
  flexWrap: "wrap",
});

const StyledButton = styled(Button)({
  padding: "7px 30px",
  backgroundColor: "#323232",
  color: "#fff",
  fontSize: "15px",
  fontWeight: 500,
  fontFamily: "'DM Sans',sans-serif",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#1f1e1e",
  },
});

const StyledBadge = styled(Box)({
  fontFamily: "DM Sans, sans-serif",
  padding: "5px 20px",
  backgroundColor: "#76a9ff",
  color: "#fff",
  fontWeight: 700,
  borderRadius: "15px",
  position: "relative",
  top: "-30px",
});
