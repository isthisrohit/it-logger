import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../actions/techActions';

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    alert('Tech Deleted');
  };
  return (
    <li className="list-group-item">
      {firstName} {lastName}
      <a href="#!" className="text-secondary float-right" onClick={onDelete}>
        <i className="fas fa-trash"></i>
      </a>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default connect(null, { deleteTech })(TechItem);
