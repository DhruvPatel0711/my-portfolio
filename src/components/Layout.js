import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ToTop from "./NavigateTopButton";
import ThemeButton from "./ThemeToggleButton"

export default function Layout() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh"}}>

        <Header />
        
        <main style={{ flexGrow: 1, display: "flex", flexDirection: "column"}}>
          <Outlet />
        </main>

        <ThemeButton/>
        
        <ToTop />
      </div>
    </>
  );
}


