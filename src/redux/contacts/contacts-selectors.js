export const selectAllContacts = ({ contacts }) => contacts.items;

export const selectImportantContacts = ({ contacts }) => {
  const onlyImportantContacts = contacts.items.filter(
    ({ importantContact }) => importantContact
  );
  return onlyImportantContacts;
};

export const selectFilteredContacts = ({ contacts, filter }) => {
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
