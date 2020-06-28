import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";
import MainHeader from "../components/mainHeader";
import MainFooter from "../components/mainFooter";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      {/* <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header> */}
      <MainHeader />
      {children}
      <MainFooter />
      {/* <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Crafted with <span role="img" aria-label="love">❤️</span> by Suyash Deshpande</p>
      </footer> */}
    </div>
  );
};
