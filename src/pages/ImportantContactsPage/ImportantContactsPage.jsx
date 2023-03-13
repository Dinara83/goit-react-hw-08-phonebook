import { useSelector, useDispatch } from 'react-redux';
import { selectImportantContacts } from 'redux/contacts/contacts-selectors';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import css from './important-contacts-page.module.css';

const ImportantContactsPage = () => {
  const importantContacts = useSelector(selectImportantContacts);

  const dispatch = useDispatch();

  const handleRemoveContact = id => {
    const action = fetchDeleteContact(id);
    dispatch(action);
  };

  const elements = importantContacts.map(({ id, name, number }) => (
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
