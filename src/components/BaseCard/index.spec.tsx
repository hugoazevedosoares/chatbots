import React from "react";

import { render } from "@testing-library/react";

import { Card } from "./";

describe("Base Card", () => {
  it("renders without crashing", () => {
    render(<Card />);
  });
});
