import * as React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";
import { Container, Box, Typography } from "@mui/material";
import { EmptyCart } from "./EmptyCart";

const cart = [];

export const Cart = () => {
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "block" },
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          width: { sm: "30em", xs: "90%" },
          position: "fixed",
          zIndex: 1,
          mt: { sm: 9, xs: 8 },
        }}
      >
        <Typography variant="h2" p={3} fontSize={18} fontWeight={700}>
          Cart
        </Typography>
        <Divider />

        <MenuList dense>
          {!cart.length && <EmptyCart />}

          {/* <MenuItem>
            <ListItemText inset>Single</ListItemText>
          </MenuItem> */}
        </MenuList>
      </Paper>
    </Box>
  );
};
