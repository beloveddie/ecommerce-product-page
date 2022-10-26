import React from "react";
import { Box } from "@mui/material";
import LightBoxMainImage from "../../LightBoxMainImage";
import CustomImageList from "../../ImageList";

const DesktopImageCol = () => {
  return (
    <Box>
      <LightBoxMainImage />
      <CustomImageList />
    </Box>
  );
};

export default DesktopImageCol;
