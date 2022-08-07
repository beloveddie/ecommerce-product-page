import { IconButton, Tooltip } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const IconCart = () => {
  return (
    <Tooltip title="View Cart">
      <IconButton>
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
};
