import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../actions/logActions';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    alert('Log Deleted Successfully');
  };
  return (
    <li className="list-group-item">
      <a
        href="#!"
        onClick={() => setCurrent(log)}
        data-toggle="modal"
        data-target="#edit-log-modal"
      >
        {log.message}
      </a>
      <br />

      <span className="text-secondary">
        <span className="text-body">ID #{log.id}</span> last updated by{' '}
        <span className="text-body">{log.tech}</span> on{' '}
        <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
      </span>

      <a href="#!" onClick={onDelete} className="text-secondary float-right">
        <i className="fas fa-trash"></i>
      </a>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
