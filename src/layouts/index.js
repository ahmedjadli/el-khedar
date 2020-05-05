import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../style/layout.css";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
