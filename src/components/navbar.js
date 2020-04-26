import React, { Component } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import { Link } from "gatsby";
import CustomNavLink from "./customLink";
import Logo from "../images/Logo.jpeg";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="white" light expand="md" fixed="top">
        <MDBContainer>
          <Link
            style={{ paddingTop: "0px", paddingBottom: "15px" }}
            to="/"
            className="navbar-brand"
          >
            <img style={{ maxWidth: "120px" }} src={Logo} alt="logo" />
          </Link>
          <MDBNavbarToggler
            name="navbar-toggler"
            onClick={this.toggleCollapse}
          />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <CustomNavLink to="/">ACCEUIL</CustomNavLink>
              <CustomNavLink to="/shop">SHOP</CustomNavLink>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <div className="d-flex align-items-center">
                <CustomNavLink to="/cart">
                  <MDBIcon fab icon="opencart" className="ml-1" /> Cart
                </CustomNavLink>
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
