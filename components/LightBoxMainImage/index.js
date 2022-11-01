import React from "react";
import { CustomImage } from "../CustomImage";
import { Box } from "@mui/material";

const LightBoxMainImage = () => {
  return (
    <Box sx={{ cursor: "pointer" }}>
      <CustomImage
        alt="LightBox Main Image"
        src="/images/image-product-1.jpg"
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export default LightBoxMainImage;
