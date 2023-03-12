export const getAllContacts = ({ contacts }) => contacts.items;

export const getImportantContacts = ({ contacts }) => {
  const onlyImportantContacts = contacts.items.filter(
    ({ importantContact }) => importantContact
  );
  return onlyImportantContacts;
};

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedContact = filter.toLowerCase();
  const result = contacts.items.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normalizedContact) ||
      number.toLowerCase().includes(normalizedContact)
    );
  });
  return result;
};
