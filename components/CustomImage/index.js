import Image from "mui-image";
import { Box } from "@mui/material";

export const CustomImage = ({ src, alt, height, width, sx }) => (
  <Box
    sx={{
      width,
      height,
      ...sx,
    }}
  >
    <Image
      sx={{ borderRadius: ".6rem" }}
      src={src}
      height={height}
      width={width}
      fit="cover"
      duration={3000}
      easing="cubic-bezier(0.7, 0, 0.6, 1)"
      showLoading
      errorIcon
      shift="top"
      distance="100px"
      shiftDuration={900}
      bgColor="inherit"
      alt={alt}
    />
  </Box>
);
