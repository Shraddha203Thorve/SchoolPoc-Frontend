import React from "react";
import { render, screen } from "@testing-library/react";
import GoogleMap from "../components/pages/GoogleMap";

describe('Header with React Testing Library', () => {
test("Header contains correct text", () => {
  render(<GoogleMap />);
});
})