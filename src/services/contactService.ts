import { Contact } from "../types/contact";
import jsonData from "./data.json";

const LOCAL_KEY = "CONTACTS_STORAGE_KEY";

function filterBySearch(search = "") {
  const regex = new RegExp(search, "giu");

  return (contact: Contact) => {
    if (!search) {
      return true;
    }

    return Boolean(contact.name.match(regex) || contact.shortName.match(regex));
  };
}

async function loadData(): Promise<Contact[]> {
  const localStorageData = localStorage.getItem(LOCAL_KEY);

  if (!localStorageData) {
    await saveContacts(jsonData);
  }

  const stringfiedData = localStorage.getItem(LOCAL_KEY)!;

  return Promise.resolve(JSON.parse(stringfiedData) as Contact[]);
}

export function saveContacts(contacts: Contact[]): Promise<Contact[]> {
  const stringfiedData = JSON.stringify(contacts);

  localStorage.setItem(LOCAL_KEY, stringfiedData);

  return Promise.resolve(contacts);
}

export async function fetchContacts({
  search = "",
}: {
  search?: string;
} = {}): Promise<Contact[]> {
  const data = await loadData();

  const filteredData = data.filter(filterBySearch(search));

  return Promise.resolve(filteredData);
}

export async function findContactByShortName(shortName: string) {
  const contacts = await fetchContacts();
  const contact = contacts.find((c) => c.shortName === shortName);

  return contact;
}
