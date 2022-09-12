import {
  Box,
  Card,
  Dialog,
  Divider,
  InputBase,
  TextField,
  Typography,
  DialogTitle,
  CardContent,
  DialogActions,
  DialogContent,
  CardMedia,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";

// import * as yup from "yup";
// import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { styled } from "@mui/system";
// import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
// import { yupResolver } from "@hookform/resolvers/yup";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
// Context
// import { AddressBookContext } from "../../context/AddressBookContext";
// // Components
// import { PrimaryButton } from "../Buttons/Buttons";
// // type
// import { Address } from "../type";

export const OrderConfirmation = () => {
  return (
    <BoxWrap>
      <Typography variant="h6" color="white">
        total
      </Typography>
      <Typography variant="h4" color="white" fontWeight={700}>
        €1,969.08
      </Typography>
      <StyledInputBase
        placeholder="Email"
        inputProps={{ "aria-label": "search" }}
        // value={"hello"}
        // onChange={(e) => setQ(e.target.value)}
      />
      <StyledButton size="small">Confirm Order</StyledButton>
    </BoxWrap>
  );
};

const BoxWrap = styled(Box) ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  marginLeft: "50px",
  flex: 1,
    // maxWidth: "100px",
    color: "#fff",
    padding: "47px 97px 67px 97px",
    fontFamily: "'DM Sans',sans-serif",
"& .MuiTypography-root":{
    fontFamily: "'DM Sans',sans-serif",
    lineHeight: "23.44px",
}
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
    //   fontSize: "34px",
    fontWeight: 700,
    lineHeight: "44.27px",
    },
  },
}));

const StyledButton = styled(Button)({
//   padding: "7px 30px",
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
