import { useState } from "react";
import { Box, IconButton, Drawer, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Logo } from "../ui/Logo";
import { MobileNavList } from "./MobileNavList";

const pages = ["Products", "Pricing", "Blog"];
export const MobileMenu = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);

  const showMenuBarHandler = () => {
    setShowMenuBar(!showMenuBar);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={showMenuBarHandler}
        color="inherit"
        sx={{ zIndex: 10 }}
      >
        {!showMenuBar ? (
          <Tooltip title="View menu">
            <MenuIcon />
          </Tooltip>
        ) : (
          <Tooltip title="Close menu">
            <CloseIcon />
          </Tooltip>
        )}
      </IconButton>
      <IconButton>
        <Logo />
      </IconButton>

      {/* menu bar */}
      {showMenuBar && (
        <Drawer
          anchor="left"
          open={showMenuBar}
          onClose={showMenuBarHandler}
          sx={{ zIndex: 1 }}
        >
          <MobileNavList showMenuBarHandler={showMenuBarHandler} />
        </Drawer>
      )}
    </Box>
  );
};
