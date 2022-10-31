import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const AddToCart = () => {
  return (
    <Button
      fullWidth
      sx={{
        "& svg": {
          color: "secondary.main",
        },
        "& h6": {
          color: "secondary.main",
          fontWeight: 700,
        },
        "&:hover": {
          bgcolor: "primary.main",
          opacity: 0.6,
        },
        backgroundColor: "primary.main",
        height: "3rem",
        border: "none",
        borderRadius: 3,
        my: { xs: 2 },
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <ShoppingCartOutlinedIcon />
        <Typography variant="h6" textTransform="none">
          Add to cart
        </Typography>
      </Stack>
    </Button>
  );
};
