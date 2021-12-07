import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("Render Home component", () => {
  render(<Home />);
});