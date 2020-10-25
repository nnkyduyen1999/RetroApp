import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarBrand,
  Navbar,
  NavbarToggler,
  NavbarText,
} from "reactstrap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="shadow-sm mb-5 py-3 rounded">
        <NavbarBrand href="/">Retro</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Teams
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Profile</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
