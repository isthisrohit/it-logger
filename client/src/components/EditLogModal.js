import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../actions/logActions';
import TechSelectOptions from './TechSelectOptions';

const EditLogModal = ({ logState: { current }, updateLog }) => {
  const [log, setLog] = useState({
    message: '',
    tech: 'Rohit Kumar'
  });

  useEffect(() => {
    if (current) {
      setLog(current);
    }
  }, [current]);

  const onChange = e => {
    setLog({
      ...log,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const newLog = {
      id: log.id,
      message: log.message,
      tech: log.tech,
      date: new Date()
    };

    updateLog(newLog);
    alert('Log Updated Successfully');
  };

  return (
    <div
      className="modal fade"
      id="edit-log-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="edit-log-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="edit-log-modal">
              Edit Log
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
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  logState: PropTypes.object.isRequired,
  updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    logState: state.log
  };
};

export default connect(mapStateToProps, { updateLog })(EditLogModal);
