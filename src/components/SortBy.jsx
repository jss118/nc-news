const SortBy = ({ setSort, setOrder }) => {
  const handleSortChange = event => {
    setSort(event.target.value);
  };

  const handleOrderChange = event => {
    if (event.target.checked) {
      setOrder("asc");
    } else {
      setOrder("desc");
    }
  };

  return (
    <form className="form--sortBy">
      <label>
        <select className="form--select" onChange={handleSortChange}>
          <option value="" disabled>
            --sort by--
          </option>
          <option value="created_at">date</option>
          <option value="comment_count">comment count</option>
          <option value="votes">votes</option>
        </select>
      </label>
      <label className="form--checkBoxLabel">
        <input
          className="form--checkBox"
          type="checkbox"
          onChange={handleOrderChange}
        />
        asc. order
      </label>
    </form>
  );
};

export default SortBy;
