import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const AddToCart = () => {
  return (
    <Box
      width="100%"
      component="button"
      justifyContent="center"
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
        p: 1,
        border: "none",
        borderRadius: 3,
      }}
    >
      <IconButton>
        <Stack direction="row" spacing={2} alignItems="center">
          <ShoppingCartOutlinedIcon />
          <Typography variant="h6">Add to cart</Typography>
        </Stack>
      </IconButton>
    </Box>
  );
};
