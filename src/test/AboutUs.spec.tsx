import React from "react";
import { render, screen } from "@testing-library/react";
import AboutUs from "../components/pages/AboutUs";
import { BrowserRouter } from 'react-router-dom'

describe('About us with React Testing Library', () => {
test("Render about us", () => {
  render(<BrowserRouter><AboutUs /></BrowserRouter>);
});
})