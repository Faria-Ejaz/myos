import { useContext } from "react";
import { styled } from "@mui/system";
import { Dialog, IconButton } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
//Components
import { CartProducts } from "../CartProducts/CartProducts";
import { OrderConfirmation } from "../OrderConfirmation/OrderConfirmation";
// Context
import { CartContext } from "../../context/CartContext";

export const DialogBox = () => {
  const { showModal, setShowModal } = useContext(CartContext);

  const onClose = () => {
    setShowModal(false);
  };
  
  return (
    <>
      <DialogWrap
        open={showModal}
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
