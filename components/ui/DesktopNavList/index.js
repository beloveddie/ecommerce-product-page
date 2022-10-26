import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { NAV_LINKS } from "./../MobileNavList/index";

const DesktopNavList = () => {
  return (
    <Box>
      <List sx={{ display: "flex" }}>
        {NAV_LINKS.map((nav_link) => (
          <ListItem key={nav_link}>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography textTransform="capitalize">{nav_link}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DesktopNavList;
