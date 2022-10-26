import React from "react";
import Image from "mui-image";
import { CustomImage } from "../CustomImage";

const LightBoxMainImage = () => {
  return (
    <CustomImage
      alt="LightBox Main Image"
      src="/images/image-product-1.jpg"
      width="80%"
      height="95%"
    />
  );
};

export default LightBoxMainImage;
