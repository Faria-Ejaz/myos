import { useContext } from "react";
import {
  Card,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
// Context
import { CartContext } from "../../context/CartContext";
//Helpers
import { formatter } from "../../utils/helpers";
import { Product as ProductType } from "../type";

type ProductArray = {
  product: ProductType
}

export default function Product(product: ProductArray) {
  const { addProductToCart } = useContext(CartContext);

  return (
    <StyledCard key={product.product.id}>
      <CardMedia
        component="img"
        alt={product.product.category.name}
        height="140"
        image={product.product.category.image}
      />
      <StyledBadge> {formatter().format(product.product.price)}</StyledBadge>
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component={"div"}>
          {product.product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.product.description}
        </Typography>
      </StyledCardContent>
      <CardActions>
        <StyledButton
          onClick={() => addProductToCart(product.product)}
          size="small"
        >
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
  display: "flex",
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
