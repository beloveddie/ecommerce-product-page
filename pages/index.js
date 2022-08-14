import Header from "../components/Header/Header";
import { MobileImageSlider } from "../components/ui/MobileImageSlider/MobileImageSlider";
import { ProductDetail } from "../components/ui/ProductDetail";
import { Cart } from "../components/Cart";

export default function Home() {
  return (
    <>
      <Header />
      <Cart />
      <MobileImageSlider />
      <ProductDetail />
    </>
  );
}
