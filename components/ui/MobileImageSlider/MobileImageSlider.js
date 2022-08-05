import React from "react";
import Image from "next/image";
import { Box, IconButton, Stack } from "@mui/material";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";

export const MobileImageSlider = () => {
  return (
    <Box mt={4} position="relative">
      <Box
        height={350}
        sx={{
          display: { lg: "none", xs: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 10,
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

      {/* Image List */}
      <Box sx={{ position: "absolute", top: 0, zIndex: -1 }}>
        <Image
          src="/images/image-product-1.jpg"
          alt="Product one"
          width={500}
          height={450}
          loading="lazy"
        />
      </Box>
    </Box>
  );
};