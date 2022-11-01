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
  // set the selected image using the index of the item on the image array
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);

  return (
    <ImageList
      sx={{ width: "100%", overflow: "hidden", mt: 3 }}
      cols={4}
      gap={20}
    >
      {imageData.map((image, index) => (
        <ImageListItem
          key={image}
          sx={{
            "&:hover": {
              opacity: 0.5,
            },
            border: selectedImageIndex === index ? "3px solid #ff7d1a" : null,
            borderRadius: ".8rem",
            cursor: "pointer",
          }}
          onClick={() => setSelectedImageIndex(index)}
        >
          <CustomImage
            sx={{
              opacity: selectedImageIndex === index ? ".3" : null,
            }}
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
