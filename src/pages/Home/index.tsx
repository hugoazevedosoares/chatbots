import React, { useState, useEffect } from "react";
import { fetchContacts, saveContacts } from "../../services/contactService";
import { Contact } from "../../types/contact";
import ContactList from "../../components/ContactList";
import {
  HomeContainer,
  Input,
  TopRow,
  Title,
  Image,
  FloatRight,
} from "./styles";
import Button from "../../components/Button";
import OrganizeBlocks from "../../resources/images/organize-blocks.png";
import OrganizeList from "../../resources/images/organize-list.png";

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cardMode, setCardMode] = useState<boolean>(false);
  const [orderByName, setOrderByName] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetchContacts({ search })
      .then((contacts) => {
        setContacts(contacts);
        setLoading(false);
      })
      .finally(() => setLoading(false));
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

      {loading && <h2>Loading...</h2>}

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
