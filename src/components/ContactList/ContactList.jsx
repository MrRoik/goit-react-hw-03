import css from './ContactList.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFillPersonDashFill } from 'react-icons/bs';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.itemCard}>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.listCard}>
            <div>
              <p className={css.descList}>
                <BsFillPersonFill className={css.iconContactList} size="18" />
                {name}
              </p>
              <p className={css.descList}>
                <BsFillTelephoneFill className={css.iconContactList} size="18" /> {number}
              </p>
            </div>
            <button className={css.button} type="button">
              Delete <BsFillPersonDashFill />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
