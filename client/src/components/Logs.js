import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import LogItem from './LogItem';
import { connect } from 'react-redux';
import { getLogs } from '../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <ul className="list-group" style={{ width: '75%', marginLeft: '12%' }}>
      <h4 className="text-center text-primary">System Logs</h4>

      {!loading && logs.length === 0 ? (
        <p className="text-center">No Logs to Show</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
