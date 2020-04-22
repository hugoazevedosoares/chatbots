import React from "react";

import { render } from "@testing-library/react";

import Header from "./";

describe("Header", () => {
  it("renders without crashing", () => {
    render(<Header />);
  });
});
