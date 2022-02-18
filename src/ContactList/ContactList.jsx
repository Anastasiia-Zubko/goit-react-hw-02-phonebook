import React, { Component } from "react";
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    return (
    <ul className={styles.ContactList}> 
      {this.props.contacts.map(({id, name, number }) => (
      <li className={styles.item}  key={id}>
        <p>
          {name}:<span>{number}</span>
        </p>
        <button 
          className={styles.btn}
          onClick={()=>this.props.onDeleteContact(id)}
        >
          Delete
        </button>
      </li>))}
     </ul>
     );
    };
  };

export default ContactList;