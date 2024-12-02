import React from "react";
import LayoutAuth from "@/_components/layout/LayoutAuth";
import { AuthWrap } from "@/_components/layout/layout.style";

export default async function Login() {
  return (
    <LayoutAuth>
      <div className={AuthWrap}>login</div>
    </LayoutAuth>
  );
}
