import React from "react";
import { render, screen } from "@testing-library/react";
import Page from "../components/pages/PageNotFound";

describe('Home with React Testing Library', () => {
test("Render PageNotFound component", () => {
  render(<Page />);
});


})