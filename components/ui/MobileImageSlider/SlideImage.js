import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

export const SlideImage = () => {
  return (
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
  );
};
