import NavItem from "./NavItem";
import { nanoid } from "nanoid";

const NavList = ({ navLinks }) => {
  return (
    <ul>
      {navLinks.map((navLink) => (
        <NavItem key={nanoid()} item={navLink} />
      ))}
    </ul>
  );
};

export default NavList;
