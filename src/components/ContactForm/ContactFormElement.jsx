import css from './ContactForm.module.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

const Input = styled(Field)`
  display: block;
`;

class ContactFormElement extends Component {

  render() {
    return (
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
    );
  }
}

export default ContactFormElement;
