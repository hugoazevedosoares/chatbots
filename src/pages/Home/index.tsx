import React, { useEffect, useState } from "react";

import Button from "../../components/Button";
import ContactList from "../../components/ContactList";
import OrganizeBlocks from "../../resources/images/organize-blocks.png";
import OrganizeList from "../../resources/images/organize-list.png";
import { fetchContacts, saveContacts } from "../../services/contactService";
import { useLayoutState, useOrderState } from "../../services/layoutService";
import { Contact } from "../../types/contact";
import {
  FloatRight,
  HomeContainer,
  Image,
  Input,
  Title,
  TopRow,
} from "./styles";

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const [cardMode, setCardMode] = useLayoutState<boolean>(false);
  const [orderByName, setOrderByName] = useOrderState<boolean>(true);

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetchContacts({ search }).then(setContacts);
  }, [search]);

  function updateSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.trim();
    setSearch(value);
  }

  function orderFunction(one: Contact, other: Contact): number {
    if (orderByName) {
      if (one.name < other.name) {
        return -1;
      }
      if (one.name > other.name) {
        return 1;
      }
      return 0;
    }

    const oneDate = new Date(one.created);
    const otherDate = new Date(other.created);

    return oneDate.getTime() - otherDate.getTime();
  }

  async function handleFavorite(contactToUpdate: Contact, isFavorite: boolean) {
    const mappedContacts = contacts.map((contact) => {
      if (contact.shortName === contactToUpdate.shortName) {
        return {
          ...contactToUpdate,
          favorite: isFavorite,
        };
      }

      return contact;
    });

    const newContacts = await saveContacts(mappedContacts);

    setContacts(newContacts);
  }

  return (
    <HomeContainer>
      <TopRow>
        <Title>My chatbots</Title>
        <FloatRight>
          <Input placeholder="Search" value={search} onChange={updateSearch} />

          <Button
            disabled={orderByName}
            className={orderByName ? "active" : ""}
            onClick={() => setOrderByName(true)}
          >
            Order by name
          </Button>
          <Button
            disabled={!orderByName}
            className={!orderByName ? "active" : ""}
            onClick={() => setOrderByName(false)}
          >
            Order by creation
          </Button>

          <Image
            src={OrganizeBlocks}
            onClick={() => setCardMode(true)}
            className={cardMode === true ? "disabled" : ""}
          />
          <Image
            src={OrganizeList}
            onClick={() => setCardMode(false)}
            className={cardMode === false ? "disabled" : ""}
          />
        </FloatRight>
      </TopRow>

      {contacts.length ? (
        <ContactList
          contacts={contacts.sort(orderFunction)}
          cardMode={cardMode}
          handleFavorite={handleFavorite}
        />
      ) : (
        ""
      )}
    </HomeContainer>
  );
}
