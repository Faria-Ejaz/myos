import React, { useEffect, useState } from "react";
import { Box, InputBase, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Product from "./Product";
import SearchIcon from "@mui/icons-material/Search";

export default function ProductListing() {
  const [products, setProducts] = useState<any>([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["title", "description"]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const search = (products: any) => {
    return products.filter((product: any) => {
      return searchParam.some((newProduct) => {
        return (
          product[newProduct]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };
  if (!isLoaded) {
    return (
      <LoaderWrap >
        <CircularProgress />
      </LoaderWrap>
    );
  } else {
    return (
      <Wrap>
        <StyledContent>
          <Typography variant="body2" color="text.secondary">
            Grow faster with Myos
          </Typography>
          <Typography gutterBottom variant="h4" component={"div"}>
            Our types of financing at a glance
          </Typography>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </StyledContent>
        <ProductWrap>
          {search(products).map((product: any, index: any) => (
            <Product product={product} index={index} />
          ))}
        </ProductWrap>
      </Wrap>
    );
  }
}

const LoaderWrap = styled(Box)({
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
    position: "fixed",
    left: "0px",
    top: "0px",
    width: "100%",
    height: "100%",
    zIndex: "9999",
});

const StyledContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  fontFamily: "'DM Sans',sans-serif",
  fontWight: 700,
  textAlign: "center",
  marginBottom: "25px",

  "& > div": {
    color: "#323232",
    fontSize: "38px",
    lineHeight: "42px",
  },

  "& > p": {
    color: "#76a9ff",
    fontSize: "14px",
    lineHeight: "25px",
    letterSpacing: "1px",
  },
});

const Wrap = styled(Box)({
  display: "flex",
  margin: "55px auto",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  "& .MuiBox-root":{
  backgroundImage: "url(https://uploads-ssl.webflow.com/5f280ec05754d34fa1d08338/5f2c0af0ed4f42333ba2988a_Icon_hellblau.svg)",
  backgroundSize: "350px 500px",
  backgroundRepeat: "no-repeat",
  }
});

const ProductWrap = styled("div")(({ theme }: any) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",

  "& > div": {
    width: "calc(100% / 4)",
    margin: "10px",
    flexDirection: "column",
    [theme.breakpoints.down("tablet")]: {
      width: "100%",
    },
  },
}));

const Search = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

const SearchIconWrapper = styled("div")({
  position: "absolute",
  margin: "0 10px",
});

const StyledInputBase = styled(InputBase)(({ theme }: any) => ({
  fontWeight: 500,
  backgroundColor: "transparent",
  lineHeight: 1.2,
  "& .MuiInputBase-input": {
    width: "100%",
    height: "40px",
    outline: "none",
    border: "1px solid rgba(50, 50, 50, 0.6)",
    borderRadius: "10px",
    fontWeight: 700,
    lineHeight: "44.27px",
    color: "#323232",
    fontFamily: "DM Sans, sans-serif",
    padding: "0px 40px",
    [theme.breakpoints.down("tablet")]: {
      width: "100%",
    },

    "&::placeholder": {
      textOverflow: "ellipsis !important",
      padding: "0 20px",
      color: "#323232",
      fontWeight: 700,
      fontFamily: "DM Sans, sans-serif",
    },
  },
}));
