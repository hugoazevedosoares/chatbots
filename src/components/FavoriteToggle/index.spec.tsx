import React from "react";

import { fireEvent, render } from "@testing-library/react";

import contacts from "../../services/data.json";
import { Contact, HandleFavoriteFunction } from "../../types/contact";
import FavoriteToggle from "./";

const someContact = contacts[0] as Contact;

const handleFavorite = (jest.fn() as unknown) as HandleFavoriteFunction;

describe("FavoriteToggle", () => {
  it("renders without crashing", () => {
    render(
      <FavoriteToggle contact={someContact} handleFavorite={handleFavorite} />
    );
  });

  it("calls handleFavorite with the oposite of contact.favorite on click", () => {
    const { getByTestId } = render(
      <FavoriteToggle contact={someContact} handleFavorite={handleFavorite} />
    );

    fireEvent.click(getByTestId("image"));

    expect(handleFavorite).toHaveBeenCalledWith(
      someContact,
      !Boolean(someContact.favorite)
    );
  });
});
