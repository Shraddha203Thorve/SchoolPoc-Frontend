import React from "react";
import { render, screen } from "@testing-library/react";
import ContactUs from "../components/pages/ContactUs";

describe('Contact us with React Testing Library', () => {
test("Header contains correct text", () => {
  render(<ContactUs />);
});
})