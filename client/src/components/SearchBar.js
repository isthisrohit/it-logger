import React, { useRef } from 'react';
import Buttons from './Buttons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchLogs } from '../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = e => {
    searchLogs(text.current.value);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <h4>IT Logger</h4>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Logs..."
          aria-label="Search"
          ref={text}
          onChange={onChange}
        />
        <Buttons />
      </form>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs })(SearchBar);
