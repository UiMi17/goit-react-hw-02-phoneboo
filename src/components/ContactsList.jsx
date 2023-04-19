import PropTypes from 'prop-types';
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

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDeleteBtnClick: PropTypes.func.isRequired,
};

