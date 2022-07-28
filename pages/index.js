import { CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <Typography variant="h1">eCommerce Product page</Typography>
      <Typography variant="body1">
        coming soon.. <CircularProgress />
      </Typography>
      <Button variant="outlined">Coming from MUI!</Button>
    </>
  );
}
