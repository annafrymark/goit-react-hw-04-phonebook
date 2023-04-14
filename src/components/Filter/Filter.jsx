import css from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filterValue, onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className={css.filterContainer}>
      <label className={css.filter}>
        Find contact by name
        <input
          className={css.inputFilter}
          id="filter"
          type="search"
          value={filterValue}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
