import ContactsListElement from './ContactsListElement';

const ContactsList = ({ contacts, handleDeleteBtnClick }) => {
  return (
    <ul>
      <ContactsListElement
        contacts={contacts}
        handleDeleteBtnClick={handleDeleteBtnClick}
      />
    </ul>
  );
};

export default ContactsList;
