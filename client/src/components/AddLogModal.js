import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../actions/logActions';
import TechSelectOptions from './TechSelectOptions';

const AddLogModal = ({ addLog }) => {
  const [log, setLog] = useState({
    message: '',
    tech: 'Rohit Kumar'
  });

  const onChange = e => {
    setLog({
      ...log,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const newLog = {
      message: log.message,
      tech: log.tech,
      date: new Date()
    };

    addLog(newLog);
    alert(`Log Added By ${log.tech}`);

    setLog({
      message: '',
      tech: 'Rohit Kumar'
    });
  };

  return (
    <div
      className="modal fade"
      id="add-log-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="add-log-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="add-log-modal">
              Add a New Log
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input
                  type="text"
                  className="form-control"
                  name="message"
                  value={log.message}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="tech">Tech</label>
                <select
                  className="form-control"
                  name="tech"
                  value={log.tech}
                  onChange={onChange}
                >
                  <TechSelectOptions />
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default connect(null, { addLog })(AddLogModal);
