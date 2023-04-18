const Filter = ({ handleSearchInputChange }) => {
  return (
    <>
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" name="search" onChange={handleSearchInputChange} />
    </>
  );
};

export default Filter;
