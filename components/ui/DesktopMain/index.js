import { Box, Grid, Container } from "@mui/material";
import React from "react";
import LightBoxMainImage from "../../LightBoxMainImage";
import { ProductDetail } from "../ProductDetail";
import DesktopImageCol from "./../DesktopImageCol/index";

const DesktopMain = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        mt: "10rem",
      }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={5}>
            <DesktopImageCol />
          </Grid>
          <Grid item xs={6}>
            <ProductDetail />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DesktopMain;
