import { useSelector } from "react-redux";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";

const Header = () => {
  const { cartData } = useSelector((state) => state.cart);
  return (
    <Navbar color="dark" expand={"mg"} dark fixed={"top"}>
      <NavbarBrand href="/">Apna Bazar</NavbarBrand>
      <NavItem style={{ color: "#fff", listStyle: "none" }}>
        Cart Count <b>{cartData?.length}</b>
      </NavItem>
    </Navbar>
  );
};

export default Header;
