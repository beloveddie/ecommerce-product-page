import { Tooltip, IconButton, Avatar } from "@mui/material";

export const IconProfile = () => {
  return (
    <Tooltip title="Profile Icon">
      <IconButton sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp">G</Avatar>
      </IconButton>
    </Tooltip>
  );
};
