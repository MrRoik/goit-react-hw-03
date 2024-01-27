import css from './App.module.css';

import contacts from '../contacts.json';

import { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactForm } from './ContactForm/ContactForm';
import { TitlePhonebook } from './Title/Title';

export const App = () => {
  const [contactName, setContactName] = useState('');
  const [search, setSearch] = useState(() => {
    const savedFeetBack = window.localStorage.getItem('saved-localStorage');

    return savedFeetBack !== null ? JSON.parse(savedFeetBack) : contacts;
  });

  const addContact = newContact => {
    setSearch(prevSearch => {
      return [...prevSearch, newContact];
    });
  };

  useEffect(() => {
    localStorage.setItem('saved-localStorage', JSON.stringify(search));
  }, [search]);

  const deleteContact = contactId => {
    const updateContactList = search.filter(contact => contact.id !== contactId);
    setSearch(updateContactList);
    localStorage.setItem('saved-localStorage', JSON.stringify(updateContactList));
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
