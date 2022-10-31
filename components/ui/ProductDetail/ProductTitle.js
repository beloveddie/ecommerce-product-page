import { Typography } from "@mui/material";
import React from "react";

export const ProductTitle = () => {
  return (
    <Typography
      variant="h2"
      fontSize={{ xs: 30, md: 40 }}
      fontWeight={700}
      mt={2}
    >
      Fall Limited Edition Sneakers
    </Typography>
  );
};
