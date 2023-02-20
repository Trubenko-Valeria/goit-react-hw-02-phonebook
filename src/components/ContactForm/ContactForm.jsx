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
  static defaultProps = {
    name: 'Анонім',
    number: 'Невідомий',
  };

  state = {
    name: '',
    number: '',
  };

  // reset = () => {
  //   this.setState({ name: '' });
  // };

  submitContact = (values, action) => {
    console.log('DDD', values);
    console.log('AAA', action);
    const People = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    this.props.onSubmit(People);
    
    action.resetForm({
      values: {
        name: '',
        number: '',
      },
    });

    const result = action.formSubmit;
    console.log('RRR', result);
    // resetForm();
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
