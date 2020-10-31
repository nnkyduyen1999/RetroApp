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
  Media
} from "reactstrap";
import "./Header.css";
import Icon from "../../icons/add.png";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="bgr">
      <Navbar light expand="md" className="shadow-sm mb-5 py-3 rounded">
        <NavbarBrand href="/">Retro</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/boards">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/teams">
                Teams
              </NavLink>
            </NavItem>
          </Nav>
          <a href="/profile">
          <NavbarText>Profile</NavbarText>
          </a>
        </Collapse>
      </Navbar>
      <button className="material-button">
          <Media
            src={Icon}
            style={{ with: 30, height: 30, display: "inline-block" }}
          />
        </button>
    </div>
  );
}
