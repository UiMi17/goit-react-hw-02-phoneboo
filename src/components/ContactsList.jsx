import ContactsListElement from './ContactsListElement';

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      <ContactsListElement contacts={contacts} />
    </ul>
  );
};

export default ContactsList;
