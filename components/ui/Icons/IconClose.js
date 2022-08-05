import { IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const IconClose = () => {
  return (
    <Tooltip title="Close Menu bar">
      <IconButton>
        <CloseIcon />
      </IconButton>
    </Tooltip>
  );
};
