import { ImageList, ImageListItem, ListItemButton } from "@mui/material";
import React from "react";
import { CustomImage } from "../CustomImage";

const imageData = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

const CustomImageList = () => {
  return (
    <ImageList
      sx={{ width: "100%" }}
      cols={4}
      rowHeight={150}
      gap={20}
      bgcolor="red"
    >
      {imageData.map((image) => (
        <ImageListItem key={image} sx={{ cursor: "pointer" }}>
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
