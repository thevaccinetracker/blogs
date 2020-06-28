import React from "react";
import MainHeader from "../components/mainHeader";
import MainFooter from "../components/mainFooter";
import "prismjs/themes/prism-okaidia.css";

export default ({ children }) => {
  return (
    <div className="site-wrapper">
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
};
