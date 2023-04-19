const ContactsListElement = ({ contacts, handleDeleteBtnClick }) => {
  return (
    <>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" id={id} onClick={handleDeleteBtnClick}>
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};

export default ContactsListElement;
