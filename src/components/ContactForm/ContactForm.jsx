import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import ContactFormElement from './ContactFormElement';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required'),
});

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  PropTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  };

  submitContact = values => {
    const People = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    this.props.onSubmit(People);
    this.reset();
    // resetForm();
  };

  reset = () => {
    this.setState({ name: '' });
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
              <ContactFormElement />
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
