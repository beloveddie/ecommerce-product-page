import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export const QuantityCounter = () => {
  return (
    <Stack
      mt={3}
      direction="row"
      justifyContent="space-between"
      alignContent="center"
      sx={{
        "& svg": {
          color: "primary.main",
          fontSize: 20,
          fontWeight: 700,
        },
        p: 2,
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
