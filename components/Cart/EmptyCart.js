import { ListItemText, MenuItem, Typography } from "@mui/material";

export const EmptyCart = () => {
  return (
    <MenuItem sx={{ p: 7, textAlign: "center", justifySelf: "center" }}>
      <ListItemText>
        <Typography
          sx={{
            fontWeight: 700,
            color: "neutral.darkGrayishBlue",
          }}
        >
          Your Cart is empty.
        </Typography>
      </ListItemText>
    </MenuItem>
  );
};
