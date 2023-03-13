import { useSelector, useDispatch } from 'react-redux';
import { getImportantContacts } from 'redux/contacts/contacts-selectors';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import css from './important-contacts-page.module.css';

const ImportantContactsPage = () => {
  const contacts = useSelector(getImportantContacts);

  const dispatch = useDispatch();

  const handleRemoveContact = payload => {
    const action = fetchDeleteContact(payload);
    dispatch(action);
  };

  const elements = contacts.map(({ id, name, number }) => (
    <li key={id} className={css.contactsItem}>
      <span className={css.contactsText}>
        {name}: {number}
      </span>
      <button
        className={css.contactsBtn}
        onClick={() => handleRemoveContact(id)}
      >
        Delete
      </button>
    </li>
  ));

  return <ul className={css.contactsList}>{elements}</ul>;
};

export default ImportantContactsPage;
