import { IconButton, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const IconMenu = () => {
  return (
    <Tooltip title="Open Menu bar">
      <IconButton>
        <MenuIcon />
      </IconButton>
    </Tooltip>
  );
};
