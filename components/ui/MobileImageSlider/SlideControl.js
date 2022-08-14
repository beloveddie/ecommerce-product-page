import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";

export const SlideControl = () => {
  return (
    <Box
      width="100%"
      mt={4}
      position="absolute"
      bgColor="primary.main"
      top={0}
      sx={{ height: { sm: 800, xs: 400 } }}
    >
      <Box
        height="inherit"
        sx={{
          display: { lg: "none", xs: "flex" },
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            " & button": {
              borderRadius: "50%",
              p: 3,
              mx: 1,
              width: 15,
              height: 15,
              backgroundColor: "neutral.white",
            },
            " & svg": {
              color: "black",
            },
          }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton variant="contained">
            <NavigateBeforeRoundedIcon />
          </IconButton>
          <IconButton variant="contained">
            <NavigateNextRoundedIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};
