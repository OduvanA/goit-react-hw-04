import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useEffect, useState } from 'react'
import css from './App.module.css'

export default function App() {

  const initContacts =
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  
  const getInitialState = () => {
    const savedContacts = localStorage.getItem("saved-contacts");
    return savedContacts !== null ?
      JSON.parse(savedContacts) : initContacts;
  }

  const [contacts, setContacts] = useState(getInitialState);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((currentContacts) => {
      return [...currentContacts, newContact];
    });
  };

  const delContact = (contactId) => {
    setContacts((currentContacts) => {
      return currentContacts.filter((contact) => contact.id !== contactId);
    })
  };
  
  const fiterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onSearch={setFilter } />
      <ContactList contacts={fiterContact} onDelete={delContact} />
    </div>

  )
}