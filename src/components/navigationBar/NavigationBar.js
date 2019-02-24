import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./NavigationBar.scss";

const NavigationBar = ({ toggle, isOpen }) => (
  <Navbar color="light" light expand="lg" className="navigation-bar">
    <NavbarBrand href="/">Bookstore</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Account
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem className="disable-blue-background">
              Settings
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </Navbar>
);

export default NavigationBar;
