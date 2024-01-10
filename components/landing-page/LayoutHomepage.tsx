"use client"

import { ReactNode } from "react";
import HeaderHomepage from "./HeaderHomepage";
import FooterHomepage from "./FooterHomepage";

interface LayoutHomepageProps {
    children: ReactNode;
}

const LayoutHomepage: React.FC<LayoutHomepageProps> = ({ children }) => {
    return (
      <>
        <HeaderHomepage />
        {children}
        <FooterHomepage />
      </>
    );
  };
  
  export default LayoutHomepage;
  