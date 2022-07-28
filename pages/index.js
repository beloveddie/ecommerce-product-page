import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <h1>eCommerce Product page</h1>
      <p>
        coming soon.. <CircularProgress />
      </p>
      <Button variant="outlined">Coming from MUI!</Button>
    </>
  );
}
