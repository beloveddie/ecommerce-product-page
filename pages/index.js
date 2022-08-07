import Header from "../components/Header/Header";
import { MobileImageSlider } from "../components/ui/MobileImageSlider/MobileImageSlider";
import { ProductDetail } from "../components/ui/ProductDetail";

export default function Home() {
  return (
    <>
      <Header />
      <MobileImageSlider />
      <ProductDetail />
    </>
  );
}
