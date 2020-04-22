import React from "react";
import { Contact, HandleFavoriteFunction } from "../../types/contact";
import ContactCard from "../ContactCard";
import ContactStripe from "../ContactStripe";
import { List, SubTitle, ListContainer } from "./styles";
import Separator from "../Separator";

interface Props {
  contacts: Contact[];
  cardMode: boolean;
  handleFavorite: HandleFavoriteFunction;
}

function splitContactsByFavorite(accumulator: Contact[][], current: Contact) {
  const [favorites, notFavorites] = accumulator;

  if (current.favorite) {
    return [[...favorites, current], notFavorites];
  }

  return [favorites, [...notFavorites, current]];
}

const ContactList: React.FunctionComponent<Props> = ({
  contacts,
  cardMode,
  handleFavorite,
}) => {
  const ContactComponent = cardMode ? ContactCard : ContactStripe;

  const [favorites, notFavorites] = contacts.reduce(splitContactsByFavorite, [
    [],
    [],
  ]);

  function renderContact(contact: Contact) {
    return (
      <ContactComponent
        key={contact.shortName}
        contact={contact}
        handleFavorite={handleFavorite}
      />
    );
  }

  return (
    <ListContainer>
      {favorites.length ? (
        <>
          <SubTitle>Favorites</SubTitle>
          <List row={cardMode}>{favorites.map(renderContact)}</List>
          <Separator />
        </>
      ) : (
        ""
      )}

      <List row={cardMode}>{notFavorites.map(renderContact)}</List>
      <Separator />
    </ListContainer>
  );
};

export default ContactList;
