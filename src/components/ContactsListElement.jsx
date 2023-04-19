import PropTypes from 'prop-types';

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

ContactsListElement.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDeleteBtnClick: PropTypes.func.isRequired,
};
