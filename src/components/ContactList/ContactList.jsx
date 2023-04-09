import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/ContactList/ContactList.module.css';
const ContactList = ({ contacts, onDeleteContact }) => (
  
  <ul className={css.contact_items}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.contact_li} key={id}>
        {' '}
        <p className={css.contact_p}> {name}</p>{' '}
        <p className={css.contact_number}> {number}</p>{' '}
        <button
          className={css.contact_btndell}
          onClick={() => onDeleteContact(id)}
        >
          {' '}
          Удалить{' '}
        </button>
      </li>
      
    ))}
  </ul>
 
);
export { ContactList };

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
