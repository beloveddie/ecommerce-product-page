import React from "react";
import { CompanyTitle } from "./CompanyTitle";
import { ProductTitle } from "./ProductTitle";
import { ProductDescription } from "./ProductDescription";
import { Price } from "./Price";
import { QuantityCounter } from "../QuantityCounter";
import { AddToCart } from "../Buttons/AddToCart";
import { Box, Container } from "@mui/material";

export const ProductDetail = () => {
  return (
    <Box mt={3} bgColor="azure" width={{ md: "30rem" }}>
      <Container>
        <CompanyTitle />
        <ProductTitle />
        <ProductDescription />
        <Price />
        <Box
          sx={{
            display: { md: "flex", xs: "block" },
            flexDirection: "row",
            justifyItems: "center",
            mt: 3,
          }}
        >
          <Box display={{ md: "flex" }} alignSelf="center" mr={{ md: 2 }}>
            <QuantityCounter />
          </Box>
          <AddToCart />
        </Box>
      </Container>
    </Box>
  );
};
