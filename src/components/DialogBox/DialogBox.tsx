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
import { CartProducts } from "../CartProducts/CartProducts";
// Context
// import { AddressBookContext } from "../../context/AddressBookContext";
// // Components
// import { PrimaryButton } from "../Buttons/Buttons";
// // type
// import { Address } from "../type";
import { CartContext } from "../../context/CartContext";

export const DialogBox = () => {

  const {cart, showModal, setShowModal} = useContext(CartContext);
  // const {
  //   reset,
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  // } = useForm<Address>({
  //   resolver: yupResolver(AddressFormSchema),
  // });
  // const submitForm = (data: Address) => {
  //   onSubmit(data);
  //   reset();
  // };

  // const { showModal, setShowModal, addAddress } =
  //   useContext(AddressBookContext);

  // const onClose = () => {
  //   setShowModal(false);
  // };

  // const onSubmit = (address: Address) => {
  //   addAddress({ ...address, id: uuid() });
  //   onClose();
  // };

  const onClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <DialogWrap
        open={showModal}
        // maxWidth="md"
      >
        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#fff",
          }}
        >
          <CancelOutlinedIcon />
        </IconButton>
        <CartProducts />
        <OrderConfirmation />
      </DialogWrap>
    </>
  );
};

const DialogWrap = styled(Dialog)({
  position: "fixed",
  top: 0,
  zIndex: 99999,
  overflow: "visible",
  borderRadius: "35px",

  "& .MuiDialog-paper": {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundImage:
      "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQ1IiBoZWlnaHQ9IjU1MCIgdmlld0JveD0iMCAwIDQ0NSA1NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAxNTUuNjg4VjU1MEgyOTYuMDdDMjg5LjIyNiA1MTEuNjk3IDI2OS45MjggNDY3LjY2IDIzMi45OTYgNDE3LjIyOEwxMDYuNTIyIDI0NC40NzZDMTA2LjUyMiAyNDQuNDc2IDU3Ljg5ODcgMTc4LjA3IDAgMTU1LjY4OFoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMTQuMzI2IDBIMFY1MTIuMDU2TDI0OS4yNzIgNDQ5LjQ3M0MyNDkuMjcyIDQ0OS40NzMgNTgyLjI1NyAzNjUuODkyIDM3OC40OTggODcuNjUzN0wzMTQuMzI2IDBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+IDwvc3ZnPiA=)",
    backgroundPosition: "top right",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    backgroundColor: "#76a9ff",
    borderRadius: "35px",
    fontFamily: "DM Sans, sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
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
