import React from "react";
import Image from "next/image";

export const MobileImageSlider = () => {
  return (
    <Image
      src="/images/image-product-1.jpg"
      alt="Product one"
      width={300}
      height="300"
      layout="responsive"
    />
  );
};
