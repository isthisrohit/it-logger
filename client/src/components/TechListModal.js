import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../actions/techActions';
import TechItem from './TechItem';

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="modal fade"
      id="tech-list-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="tech-list-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="tech-list-modal">
              Technician List
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
            <ul className="list-group">
              {!loading &&
                techs !== null &&
                techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    tech: state.tech
  };
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
