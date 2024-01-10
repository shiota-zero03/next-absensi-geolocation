import React from 'react';
import LayoutHomepage from "@/components/landing-page/LayoutHomepage";
import HomeComponents from "@/components/landing-page/home/HomeComponents";

export default function home(){
    return(
      <LayoutHomepage>
        <HomeComponents />
      </LayoutHomepage>
    )
}