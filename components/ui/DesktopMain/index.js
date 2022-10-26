import { Box, Grid, Container } from "@mui/material";
import React from "react";
import { ProductDetail } from "../ProductDetail";

const DesktopMain = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            LightBox coming soon
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
