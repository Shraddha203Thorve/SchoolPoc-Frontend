import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe('Home with React Testing Library', () => {
test("Render Home component", () => {
  render(<Home />);
});
})