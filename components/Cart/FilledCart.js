import {
  Box,
  Typography,
  ListItemText,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const FilledCart = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MenuItem>
        <List
          component="nav"
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="product image"
                src="/images/image-product-1.jpg"
                variant="rounded"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Autumn Limited Edition"
              secondary={
                <Typography>
                  $125.00 x 3 <b>$375.00</b>
                </Typography>
              }
            />
            <ListItemButton>
              <DeleteIcon />
            </ListItemButton>
          </ListItem>
        </List>
      </MenuItem>
    </Box>
  );
};

export default FilledCart;
