import React from "react";
import { render, screen } from "@testing-library/react";
import ContactUs from "../components/pages/ContactUs";

test("Header contains correct text", () => {
  render(<ContactUs />);
});