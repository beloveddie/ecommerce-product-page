import React from "react";
import Image from "mui-image";

const LightBoxMainImage = () => {
  return (
    <Image
      style={{ borderRadius: "1rem" }}
      src="/images/image-product-1.jpg"
      height="95%"
      width="80%"
      fit="cover"
      duration={3000}
      easing="cubic-bezier(0.7, 0, 0.6, 1)"
      showLoading={true}
      errorIcon={true}
      shift="top"
      distance="100px"
      shiftDistance={900}
      bgColor="inherit"
      alt="product image"
    />
  );
};

export default LightBoxMainImage;
