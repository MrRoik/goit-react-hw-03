import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useId } from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 symb long')
    .required('This is a required field'),
  number: Yup.string()
    .min(10, 'Name must be at least 10 symb long')
    .required('This is a required field'),
});

export const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        onAdd({ id: Date.now(), ...values });
        actions.resetForm();
      }}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.inputForm}>
          <label htmlFor={nameFieldId} className={css.labelInput}>
            Name
          </label>
          <Field type="text" name="name" id={nameFieldId} className={css.inputField} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.inputForm}>
          <label htmlFor={numberFieldId} className={css.labelInput}>
            Number
          </label>
          <Field type="tel" name="number" id={numberFieldId} className={css.inputField} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.btn}>
          Add contact <BsFillPersonPlusFill size="18" />
        </button>
      </Form>
    </Formik>
  );
};
