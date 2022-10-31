import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export const QuantityCounter = () => {
  return (
    <Stack
      mt={{ xs: 3, md: 0 }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        "& svg": {
          color: "primary.main",
          fontSize: 20,
          fontWeight: 700,
        },
        width: { md: "10rem", xs: "100%" },
        height: "3rem",
        backgroundColor: "neutral.lightGrayishBlue",
        borderRadius: 3,
      }}
    >
      <IconButton>
        <RemoveRoundedIcon />
      </IconButton>
      <Typography variant="h6" fontWeight={700}>
        0
      </Typography>
      <IconButton>
        <AddRoundedIcon />
      </IconButton>
    </Stack>
  );
};
