import React from "react";
import { Box } from "@mui/system";
import { CompanyTitle } from "./CompanyTitle";
import { ProductTitle } from "./ProductTitle";
import { ProductDescription } from "./ProductDescription";
import { Price } from "./Price";
import { QuantityCounter } from "../QuantityCounter";
import { AddToCart } from "../Buttons/AddToCart";
import { Container } from "@mui/material";

export const ProductDetail = () => {
  return (
    <Box mt={3} bgColor="azure">
      <Container>
        <CompanyTitle />
        <ProductTitle />
        <ProductDescription />
        <Price />
        <QuantityCounter />
        <AddToCart />
      </Container>
    </Box>
  );
};
