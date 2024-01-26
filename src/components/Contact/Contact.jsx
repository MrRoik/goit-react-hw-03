//import css from './Contact.module.css';
//import { BsFillPersonFill } from 'react-icons/bs';
//import { BsFillTelephoneFill } from 'react-icons/bs';
//import { BsFillPersonDashFill } from 'react-icons/bs';

export const Contact = ({ item, onDelete }) => {
  return (
    <>
      <div>
        <p>{item.name}</p>
        <p>{item.number}</p>
      </div>
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </>
  );
};

/*
<li key={item.id} className={css.listCard}>
      <div>
        <p className={css.descList}>
          <BsFillPersonFill className={css.iconContactList} size="18" />
          {item.name}
        </p>
        <p className={css.descList}>
          <BsFillTelephoneFill className={css.iconContactList} size="18" /> {item.number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={() => onDelete(item.id)}>
        Delete <BsFillPersonDashFill />
      </button>
    </li>*/
