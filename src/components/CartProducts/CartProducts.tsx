import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  IconButton,
  TableContainer,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useContext } from "react";
import { styled } from "@mui/system";
// Context
import { CartContext } from "../../context/CartContext";
//Helpers
import { formatter } from "../../utils/helpers";
import { Product as ProductType } from "../type";

export const CartProducts = () => {
  const { cart, removeProductFromCart, confirmOrder } = useContext(CartContext);

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
        <TableBody>
          {cart.length ? (
            cart.map((product: ProductType) => (
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
                <TableCell align="left">
                  {formatter().format(product.price)}
                </TableCell>
                {!confirmOrder && (
                  <TableCell align="left">
                    <IconButton
                      aria-label="cart"
                      onClick={() => removeProductFromCart(product)}
                    >
                      <DeleteRoundedIcon />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  border: "none",
                  display: "center",
                  justifyContent: "center",
                },
              }}
              align="left"
            >
              Cart is empty
            </TableCell>
          )}
        </TableBody>
      </Table>
    </TableContainerWrap>
  );
};

const TableContainerWrap = styled(TableContainer)({
  "& .MuiTableCell-root": {
    color: "#2d3958",
    fontFamily: "DM Sans, sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    borderBottom: "1px solid rgb(118, 169, 255)",
  },
});
