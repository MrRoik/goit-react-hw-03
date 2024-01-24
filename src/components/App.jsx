//import { useState } from 'react'
import contact from '../contact.json';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactList contacts={contact} />
    </div>
  );
};
