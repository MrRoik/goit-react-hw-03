import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ array, onDelete }) => {
  return (
    <ul className={css.itemCard}>
      {array.map(id => {
        return (
          <li key={id}>
            <Contact onDelete={onDelete} item={array} />
          </li>
        );
      })}
    </ul>
  );
};
