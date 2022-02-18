import React, { Component } from "react";
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };
  
  onHandleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    const {name, number} = this.state
    evt.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.Contacts} onSubmit={this.handleSubmit}>
        <label className={styles.label}> 
          Name
          <input
          className={styles.input}
          onChange={this.onHandleChange}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
        </label>
        <label className={styles.label}> 
          Number
          <input
          className={styles.input}
          onChange={this.onHandleChange}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
        </label>
        <button className={styles.btn} type="submit">
          Add contact
          </button>
      </form>
    )
  };
};

export default ContactForm;