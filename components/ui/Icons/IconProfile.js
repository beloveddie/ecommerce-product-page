import { Tooltip, IconButton, Avatar } from "@mui/material";

export const IconProfile = () => {
  return (
    <Tooltip title="Esteemed, Remy Sharp">
      <IconButton sx={{ p: 0 }}>
        <Avatar
          alt="Remy Sharp"
          src="/images/image-avatar.png"
          sx={{
            "&:hover": { border: "2px solid", borderColor: "primary.main" },
          }}
        ></Avatar>
      </IconButton>
    </Tooltip>
  );
};
