import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import contacts from "../../services/data.json";
import { Contact } from "../../types/contact";
import ContactList from "./";

const handleFavorite = () => {};

describe("ContactCard", () => {
  it("renders without crashing in cardMode, single List", () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <ContactList
          contacts={contacts}
          cardMode={true}
          handleFavorite={handleFavorite}
        />
      </MemoryRouter>
    );

    expect(getAllByTestId("list").length).toBe(1);
  });

  it("renders without crashing without cardMod, single List", () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <ContactList
          contacts={contacts}
          cardMode={false}
          handleFavorite={handleFavorite}
        />
      </MemoryRouter>
    );

    expect(getAllByTestId("list").length).toBe(1);
  });

  it("renders two Lists if there are favortite contacts", () => {
    const contactsWithFavorites = (contacts as Contact[]).map(
      (contact, index) => {
        contact.favorite = index % 2 ? true : false;
        return contact;
      }
    );

    const { getAllByTestId } = render(
      <MemoryRouter>
        <ContactList
          contacts={contactsWithFavorites}
          cardMode={false}
          handleFavorite={handleFavorite}
        />
      </MemoryRouter>
    );

    expect(getAllByTestId("list").length).toBe(2);
  });
});
