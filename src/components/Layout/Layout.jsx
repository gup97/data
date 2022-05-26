import Header from "components/Header";
import React, { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
