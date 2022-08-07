import { Stack, Typography, Box } from "@mui/material";
import React from "react";

export const Price = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        "& h4": {
          fontSize: 18,
          fontWeight: 700,
        },
      }}
    >
      <Stack direction="row" spacing={3} alignItems="center">
        <Typography variant="h3" fontWeight={700} fontSize={28}>
          $125.00
        </Typography>
        <Box
          sx={{
            p: 0.5,
            textAlign: "center",
            width: 60,
            backgroundColor: "secondary.main",
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" color="primary">
            50%
          </Typography>
        </Box>
      </Stack>

      <Typography
        variant="h4"
        sx={{ textDecoration: "line-through" }}
        color="neutral.grayishBlue"
      >
        $250.00
      </Typography>
    </Stack>
  );
};
