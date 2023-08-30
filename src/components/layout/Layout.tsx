import React from "react";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import { Theme } from "@/commons/styles/theme";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <LayoutHeader />
      {children}
      <LayoutFooter />
    </>
  );
}
