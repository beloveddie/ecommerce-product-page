import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const AddToCart = () => {
  return (
    <Box
      width="100%"
      component="button"
      my={2}
      sx={{
        "& svg": {
          color: "secondary.main",
        },
        "& h6": {
          color: "secondary.main",
          fontWeight: 700,
        },
        backgroundColor: "primary.main",
        p: 2,
        border: "none",
        borderRadius: 3,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <ShoppingCartOutlinedIcon />
        <Typography variant="h6">Add to cart</Typography>
      </Stack>
    </Box>
  );
};
