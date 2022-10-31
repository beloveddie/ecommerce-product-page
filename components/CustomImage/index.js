// import Image from "mui-image";
import Image from "mui-image";

export const CustomImage = ({ src, alt, height, width }) => (
  <Image
    sx={{ borderRadius: "1rem" }}
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
);
