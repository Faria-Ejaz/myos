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
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
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
import { OrderConfirmation } from "../OrderConfirmation/OrderConfirmation";
// Context
// import { AddressBookContext } from "../../context/AddressBookContext";
// // Components
// import { PrimaryButton } from "../Buttons/Buttons";
// // type
// import { Address } from "../type";
import { CartContext } from "../../context/CartContext";

export const CartProducts = () => {
  const { cart, removeProductFromCart } = useContext(CartContext);

  return (
    <TableContainerWrap
      sx={{
        width: "50%",
        height: "500px",
        maxHeight: "550px",
        background: "#fff",
      }}
    >
      <Table size="small" aria-label="a dense table">
        {/* <TableHead>
                <TableRow>
                  <TableCell> Order Detail</TableCell>
           
                </TableRow>
              </TableHead> */}
        <TableBody>
          {cart &&
            cart.map((product: any, index: any) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <img
                    width={"100px"}
                    height={"auto"}
                    src={product.category.image}
                    alt={product.category.name}
                  />
                </TableCell>
                <TableCell align="left">{product.title}</TableCell>
                <TableCell align="left">€{product.price}</TableCell>
                {/* <TableCell align="left"><AddCircleRoundedIcon/>1<RemoveCircleRoundedIcon/></TableCell> */}
                <TableCell align="left">
                  {" "}
                  <IconButton
                    aria-label="cart"
                    onClick={() => removeProductFromCart(product, index)}
                  >
                    <DeleteRoundedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainerWrap>
  );
};

const TableContainerWrap = styled(TableContainer)({
  "& .MuiTableCell-root": {
    // border: "none",
    color: "#2d3958",
    fontFamily: "DM Sans, sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    borderBottom: "1px solid rgb(118, 169, 255)",
    // height: "500px",
    // boxSizing: "border-box",
    // maxSidth: "1360px",
    // overflow: "hidden",

    // marginBottom: "20px",
  },
});

const Field = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: "15px 12px",
    fontFamily: "HCo Gotham SSm, sans-serif",
    color: "#343a40",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "25px",
      border: "1px solid rgb(200, 200, 200) ",
    },
  },
  "& .MuiFormLabel-root": {
    fontFamily: "HCo Gotham SSm, sans-serif",
    color: "#343a40",
  },
});

const SelectNative = styled(InputBase)({
  width: "100%",
  height: "53px",
  padding: "0px 12px",
  fontFamily: "HCo Gotham SSm, sans-serif",
  color: "#343a40",
  borderRadius: "25px",
  border: "1px solid rgb(200, 200, 200) ",
});

const SelectHelperText = styled(Typography)({
  fontSize: "0.75rem",
  fontFamily: "HCo Gotham SSm, sans-serif",
  textAlign: "left",
  marginTop: "3px",
  marginRight: "14px",
  marginBottom: "0",
  marginLeft: "14px",
  color: " #d32f2f",
});
