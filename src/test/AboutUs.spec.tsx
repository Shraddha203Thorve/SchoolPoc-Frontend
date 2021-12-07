import React from "react";
import { render, screen } from "@testing-library/react";
import AboutUs from "../components/pages/AboutUs";

test("Render about us", () => {
  render(<AboutUs />);
});