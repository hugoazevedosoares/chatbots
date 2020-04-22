import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import contacts from "../../services/data.json";
import { HandleFavoriteFunction } from "../../types/contact";
import ContactCard from "./";

const someContact = contacts[0];

const handleFavorite = (jest.fn() as unknown) as HandleFavoriteFunction;

describe("ContactCard", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <ContactCard contact={someContact} handleFavorite={handleFavorite} />
      </MemoryRouter>
    );
  });
});
