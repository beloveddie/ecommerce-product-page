import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { CustomImage } from "../CustomImage";

const imageData = [
  "/images/image-product-1.jpg",
  "/images/image-product-1.jpg",
  "/images/image-product-1.jpg",
  "/images/image-product-1.jpg",
];

const CustomImageList = () => {
  return (
    <ImageList sx={{ width: "80%" }} cols={4} rowHeight={150} gap={20}>
      {imageData.map((image) => (
        <ImageListItem key={image}>
          <CustomImage
            alt="Bottom Image"
            src={image}
            height="60%"
            width="100%"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default CustomImageList;
