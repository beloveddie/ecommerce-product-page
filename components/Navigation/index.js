import NavList from "./NavList";

export const NAV_LINKS = ["collections", "men", "women", "about", "contact"];

export const Navigation = () => {
  return (
    <nav>
      <NavList navLinks={NAV_LINKS} />
    </nav>
  );
};
