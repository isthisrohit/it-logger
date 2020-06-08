import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../actions/techActions';

const AddTechModal = ({ addTech }) => {
  const [tech, setTech] = useState({
    firstName: '',
    lastName: ''
  });

  const onChange = e => {
    setTech({
      ...tech,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addTech(tech);
    setTech({
      firstName: '',
      lastName: ''
    });
    alert('Tech Added Successfully');
  };

  return (
    <div
      className="modal fade"
      id="add-tech-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="add-tech-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="add-tech-modal">
              Add a New Technician
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
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={tech.firstName}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={tech.lastName}
                  onChange={onChange}
                  required
                />
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

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired
};

export default connect(null, { addTech })(AddTechModal);
