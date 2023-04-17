const ContactsListElement = ({ contacts }) => {
  return (
    <>
      {contacts.map(({ name, id }) => {
        return (
          <li key={id}>
            <p>{name}</p>
          </li>
        );
      })}
    </>
  );
};

export default ContactsListElement;
