import css from './App.module.css';

//import contacts from '../contacts.json';

import { useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactForm } from './ContactForm/ContactForm';
import { TitlePhonebook } from './Title/Title';

export const App = () => {
  const [contactName, setContactName] = useState('');
  const [search, setSearch] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const addContact = newContact => {
    setSearch(prevSearch => {
      return [...prevSearch, { name: newContact, id: Date.now }];
    });
  };

  const deleteContact = contactId => {
    setSearch(prevSearch => {
      return prevSearch.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = search.filter(contact =>
    contact.name.toLowerCase().trim().includes(contactName.toLowerCase())
  );

  return (
    <div className={css.container}>
      <TitlePhonebook />
      <ContactForm onAdd={addContact} />
      <SearchBox value={contactName} onChange={setContactName} />
      <ContactList item={search} contact={visibleContacts} onDel={deleteContact} />
    </div>
  );
};
