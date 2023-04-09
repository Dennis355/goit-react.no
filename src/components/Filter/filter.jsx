import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css';
const Filter = ({ value, onChange }) => (
  <div className={css.divFilter}>
    <label className={css.labelFilter}>
      Find contakts by name
      <input
        className={css.inputFilter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);
export { Filter };

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
