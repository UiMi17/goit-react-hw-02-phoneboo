import PropTypes from 'prop-types';

const Filter = ({ handleSearchInputChange }) => {
  return (
    <>
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" name="search" onChange={handleSearchInputChange} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  handleSearchInputChange: PropTypes.func.isRequired,
};
