const ContactsListElement = ({ contacts }) => {
  return (
    <>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <p>{name}: {number}</p>
          </li>
        );
      })}
    </>
  );
};

export default ContactsListElement;
