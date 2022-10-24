import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { EmptyCart } from "./EmptyCart";
import FilledCart from "./FilledCart";

const cart = [];

export const Cart = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            display: { xs: "flex" },
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
            {!cart.length ? <EmptyCart /> : <FilledCart />}
          </Paper>
        </Box>
      </Container>
    </>
  );
};
