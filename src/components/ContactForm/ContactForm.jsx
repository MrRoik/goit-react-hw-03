import css from './ContactForm.module.css';

export const ContactForm = ({ onAdd }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onAdd(event.target.elements.name.value);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        <span>Name</span>
        <input type="text" name="name" />
      </label>
      <label>
        <span>Number</span>
        <input type="tel" name="number" />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
