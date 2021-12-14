import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";


describe('Footer with React Testing Library', () => {
test("Header contains correct text", () => {
  render(<Footer />);
});
})