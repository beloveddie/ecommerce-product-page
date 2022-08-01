import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const NAV_LINKS = ["collections", "men", "women", "about", "contact"];

export const MobileNavList = ({ showMenuBarHandler }) => {
  return (
    <Box role="presentation" sx={{ width: 250, mt: 7 }}>
      <List>
        {NAV_LINKS.map((nav_link) => (
          <ListItem key={nav_link} onClick={showMenuBarHandler} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography
                    sx={{ textTransform: "capitalize", fontWeight: 700 }}
                  >
                    {nav_link}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
