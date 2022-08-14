import React from "react";
import Image from "next/image";
import { Box, IconButton, Stack } from "@mui/material";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";

export const MobileImageSlider = () => {
  return (
    <>
      <Box
        sx={{
          display: { lg: "none", xs: "block" },
        }}
      >
        <Image
          src="/images/image-product-1.jpg"
          alt="Product one"
          width={400}
          height={400}
          layout="responsive"
          loading="lazy"
        />
      </Box>
      <Box mt={4}>
        <Box
          width="100%"
          height={400}
          position="absolute"
          top={0}
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
    </>
  );
};
