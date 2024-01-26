import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contact, onDel }) => {
  return (
    <ul className={css.itemCard}>
      {contact.map(item => {
        return (
          <li key={item.id} className={css.listCard}>
            <Contact onDelete={onDel} item={item} />
          </li>
        );
      })}
    </ul>
  );
};
