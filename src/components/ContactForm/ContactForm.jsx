import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Input = styled(Field)`
  display: block;
`;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .required('Required'),
});

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // propTypes = {
  //   name: PropTypes.string.isRequired,
  //   number: PropTypes.number.isRequired,
  // };

  submitContact = (values, { resetForm }) => {
    const People = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    this.props.onSubmit(People);
    resetForm();
  };

  render() {
    return (
      <div className={css.main}>
        <Formik
          initialValues={this.state}
          validationSchema={schema}
          onSubmit={this.submitContact}
        >
          <Form>
            <div>
              <label className={css.form} htmlFor="name">
                Name
                <Input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <ErrorMessage name="name" />
              </label>
              <label className={css.form} htmlFor="number">
                Telephone
                <Input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
                <ErrorMessage name="number" />
              </label>
            </div>
            <button className={css.form_button} type="submit">
              Add contact
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
