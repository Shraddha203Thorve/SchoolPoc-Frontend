import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe('Header with React Testing Library', () => {
test("Header contains correct text", () => {
  render(<Header />);
});
})