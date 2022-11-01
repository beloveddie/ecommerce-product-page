import React from "react";
import { Grid } from "@mui/material";
import LightBoxMainImage from "../../LightBoxMainImage";
import CustomImageList from "../../ImageList";

const DesktopImageCol = () => {
  return (
    <Grid container justifyContent="center" height="85%" width="95%">
      <Grid container height="25rem" justifyContent="center">
        <LightBoxMainImage />
      </Grid>
      <Grid item>
        <CustomImageList />
      </Grid>
    </Grid>
  );
};

export default DesktopImageCol;
