import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { NAV_LINKS } from "./../MobileNavList/index";

const DesktopNavList = () => {
  return (
    <Box>
      <List>
        {NAV_LINKS.map((nav_link) => (
          <ListItem key={nav_link}>
            <ListItemText primary={<Typography>{nav_link}</Typography>} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DesktopNavList;
