import { Container } from "@mui/system";
import { Box, Link, Button, InputBase, IconButton, Badge } from "@mui/material";
import { styled } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// Components
// import { PrimaryButton } from "../Buttons/Buttons";

import React, { useContext } from "react";

// import  {
//   AddressBookContext,
// } from "../../context/AddressBookContext";
import { CartContext } from "../../context/CartContext";

// Assets
import logo from "../../assets/svg/logo.svg";

function Nav() {
    const { setShowModal } = useContext(CartContext);

  return (
    <StyledNavBox component="nav" bgcolor={"white"} sx={{ py: 3 }}>
      <Container>
        <Box
          display={"flex"}
          width={"100%"}
          padding={"15px 0"}
          justifyContent={"space-between"}
          flexWrap="wrap"
        >
          <StyledLink href="#">
            <img src={logo} alt="bequest logo" />
          </StyledLink>
          <Box display="flex" justifyContent="space-between">
            <IconButton aria-label="cart" onClick={()=> setShowModal(true)}>
              <StyledBadge badgeContent={4} >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <StyledButton >
              Inquire for free <ArrowRightAltIcon fontSize={"small"} />
            </StyledButton>
          </Box>
        </Box>
      </Container>
    </StyledNavBox>
  );
}

export default Nav;

const StyledLink = styled(Link)({
  width: "130px",
  height: "24px",
  marginRight: "25px",
  paddingTop: "10px",
});

const StyledButton = styled(Button)(({ theme }: any) => ({
  alignItems: "center",
  borderRadius: "4px",
  backgroundColor: "#76a9ff",
  fontSize: "15px",
  fontWeight: 500,
  color: "#fff",
  display: "flex",
  marginLeft: 0,
  padding: "7px 30px",
  fontFamily: "'DM Sans',sans-serif",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#6399f7",
  },
}));

const StyledNavBox = styled(Box)({
  position: "sticky",
  top: 0,
  zIndex: 9999,
  display: "block",
  overflow: "visible",
  padding: "10px 5%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f4f8fd",
});

const Search = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

const SearchIconWrapper = styled("div")({
  position: "absolute",
  top: "48px",
  left: "11px",
  right: "11px",
});

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    right: 3,
    top: 9,
    fontFamily: "DM Sans, sans-serif",
    padding: "0 4px",
    backgroundColor: "#76a9ff",
    color: "#fff",
    fontWeight: "700"
  },
  "& .MuiSvgIcon-root": {
    color: "black",
    fontSize: "32px",
    // padding: "5px",
  },
});

const StyledInputBase = styled(InputBase)(({ theme }: any) => ({
  color: "inherit",
  flex: 1,

  fontWeight: 500,
  backgroundColor: "transparent",
  lineHeight: 1.2,
  "& .MuiInputBase-input": {
    width: "30%",
    height: "40px",
    outline: "none",
    border: "1px solid rgba(50, 50, 50, 0.6)",
    borderRadius: "10px",
    fontWeight: 700,
    lineHeight: "44.27px",
    color: "#323232",
    fontFamily: "DM Sans, sans-serif",
    padding: "0px 23px",
    [theme.breakpoints.down("tablet")]: {
      width: "100%",
    },
  },
}));
