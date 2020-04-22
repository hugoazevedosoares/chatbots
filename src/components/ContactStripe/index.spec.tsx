import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import contacts from "../../services/data.json";
import ContactStripe from "./";

const someContact = contacts[0];

const handleFavorite = () => {};

describe("ContactStripe", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <ContactStripe contact={someContact} handleFavorite={handleFavorite} />
      </MemoryRouter>
    );
  });
});
