import React from "react";
import Header from "./header/Header";
import { BrowserRouter } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}
