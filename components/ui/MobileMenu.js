import { Box, IconButton } from "@mui/material";
import { IconMenu } from "../ui/Icons/IconMenu";
import { Logo } from "../ui/Logo";

export const MobileMenu = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        //   onClick={handleOpenNavMenu}
        color="inherit"
      >
        <IconMenu />
      </IconButton>
      <IconButton>
        <Logo />
      </IconButton>
    </Box>
  );
};
