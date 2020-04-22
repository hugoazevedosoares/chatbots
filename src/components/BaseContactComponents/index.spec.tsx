import React from "react";
import { HashRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import { BaseContactComponent, StyledLink } from "./";

describe("BaseContactComponent, StyledLink", () => {
  it("renders BaseContactComponent without crashing", () => {
    render(<BaseContactComponent />);
  });

  it("renders StyledLink without crashing", () => {
    render(
      <HashRouter>
        <StyledLink to="/" />
      </HashRouter>
    );
  });
});
