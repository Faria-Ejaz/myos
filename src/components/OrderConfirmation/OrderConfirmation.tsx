import { Box, Button, InputBase, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { styled } from "@mui/system";
// Context
import { CartContext } from "../../context/CartContext";
// Helpers
import { formatter } from "../../utils/helpers";

export const OrderConfirmation = () => {
  const { confirmOrder, setConfirmOrder, totalPrice } = useContext(CartContext);

  const [email, setEmail] = useState<string>("");

  const useEmailValidation = (email: string) => {
    const isEmailValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    return isEmailValid;
  };

  const isEmailValid = useEmailValidation(email);
  return (
    <BoxWrap>
      <Typography variant="h6" color="white">
        total
      </Typography>
      <Typography variant="h4" color="white" fontWeight={700}>
        {formatter().format(totalPrice)}
      </Typography>
      {!confirmOrder ? (
        <>
          <StyledInputBase
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            inputProps={{ "aria-label": "email" }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <StyledButton
            size="small"
            onClick={() => isEmailValid && setConfirmOrder(true)}
            disabled={!isEmailValid}
          >
            Confirm Order
          </StyledButton>
        </>
      ) : (
        <Typography variant="h4" color="white" fontWeight={700}>
          Order Confirmed
        </Typography>
      )}
    </BoxWrap>
  );
};

const BoxWrap = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  marginLeft: "50px",
  flex: 1,
  color: "#fff",
  padding: "47px 97px 67px 97px",
  fontFamily: "'DM Sans',sans-serif",
  "& .MuiTypography-root": {
    fontFamily: "'DM Sans',sans-serif",
    lineHeight: "23.44px",
  },
});

const StyledInputBase = styled(InputBase)(({ theme }: any) => ({
  fontWeight: 500,
  backgroundColor: "transparent",
  lineHeight: 1.2,
  "& .MuiInputBase-input": {
    width: "100%",
    height: "40px",
    outline: "none",
    border: "2px solid #fff",
    borderRadius: "10px",
    fontWeight: 700,
    lineHeight: "44.27px",
    color: "#fff",
    fontFamily: "DM Sans, sans-serif",
    padding: "0px 40px",
    [theme.breakpoints.down("tablet")]: {
      width: "100%",
    },

    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#fff",
      fontFamily: "DM Sans, sans-serif",
      fontWeight: 700,
      lineHeight: "44.27px",
    },
  },
}));

const StyledButton = styled(Button)({
  color: "#323232",
  backgroundColor: "#fff",
  fontSize: "15px",
  fontWeight: 700,
  fontFamily: "'DM Sans',sans-serif",
  textTransform: "none",
  boxShadow: "0px 50px 100px rgb(41 93 197 / 30%)",
  borderRadius: "10px",
  height: "49px",
  "&:hover": {
    backgroundColor: "#1f1e1e",
    color: "#fff",
  },
});
