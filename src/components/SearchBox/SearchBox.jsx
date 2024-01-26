import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={evt => onChange(evt.target.value)}
      placeholder="search"
      className={css.inputSearch}
    />
  );
};
