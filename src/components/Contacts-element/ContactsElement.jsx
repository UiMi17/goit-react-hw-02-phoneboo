import PropTypes from 'prop-types';
import { StyledLi, StyledButton } from './StyledContactsElement';

const ContactsListElement = ({ contacts, handleDeleteBtnClick }) => {
  return (
    <>
      {contacts.map(({ name, number, id }) => {
        return (
          <StyledLi key={id}>
            <p>
              {name}: {number}
            </p>
            <StyledButton type="button" id={id} onClick={handleDeleteBtnClick}>
              Delete
            </StyledButton>
          </StyledLi>
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
