import React from "react";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutHeader />
      {children}
      <LayoutFooter />
    </>
  );
}
