import Header from "../components/Header/Header";
import { MobileImageSlider } from "../components/ui/MobileImageSlider/MobileImageSlider";
import { ProductDetail } from "../components/ui/ProductDetail";
import { Cart } from "../components/Cart";
import DesktopMain from "../components/ui/DesktopMain";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Cart />
      <MobileImageSlider />
      <ProductDetail /> */}
      <DesktopMain />
    </>
  );
}
