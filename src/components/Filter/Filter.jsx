import { Component } from 'react';
import css from './filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div className={css.filterContainer}>
        <label className={css.filter}>
          Find contact by name
          <input
            className={css.inputFilter}
            id="filter"
            type="search"
            value={this.props.filterValue}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    number: PropTypes.number,
  }),
};

export default Filter;
