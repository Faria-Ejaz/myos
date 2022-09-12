import { useContext } from "react";
import { styled } from "@mui/system";
import { Container } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Link, Button, IconButton, Badge } from "@mui/material";
// Assets
import logo from "../../assets/svg/logo.svg";
//Context
import { CartContext } from "../../context/CartContext";

function Nav() {
  const { setShowModal, totalProducts } = useContext(CartContext);

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
            <IconButton aria-label="cart" onClick={() => setShowModal(true)}>
              <StyledBadge badgeContent={totalProducts}>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <StyledButton>
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

const StyledButton = styled(Button)({
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
});

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

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    right: 3,
    top: 9,
    fontFamily: "DM Sans, sans-serif",
    padding: "0 4px",
    backgroundColor: "#76a9ff",
    color: "#fff",
    fontWeight: "700",
  },
  "& .MuiSvgIcon-root": {
    color: "black",
    fontSize: "32px",
    // padding: "5px",
  },
});
