import * as React from "react";
import { Container, Box, Stack, AppBar, Toolbar } from "@mui/material/";
import { Logo } from "../ui/Logo";
import { MobileMenu } from "../ui/MobileMenu";
import { IconProfile } from "../ui/Icons/IconProfile";
import { IconCart } from "../ui/Icons/IconCart";

const Header = () => {
  return (
    <AppBar component="header" sx={{ backgroundColor: "neutral.white" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton>
              <Logo />
            </IconButton>
            <DesktopNavList />
          </Box>

          <MobileMenu />

          <Box
            sx={{
              display: "flex",
              width: { md: "10rem" },
            }}
          >
            <Stack direction="row" spacing={2}>
              <IconCart />
              <IconProfile />
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
