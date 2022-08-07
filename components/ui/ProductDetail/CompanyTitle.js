import { Typography } from "@mui/material";
import React from "react";

export const CompanyTitle = () => {
  return (
    <Typography
      variant="h1"
      fontSize={16}
      fontWeight={700}
      color="primary.main"
        letterSpacing={1}
    >
      {"sneaker company".toUpperCase()}
    </Typography>
  );
};
