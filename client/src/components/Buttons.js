import React from 'react';

const AddButton = () => {
  return (
    <div className="float-right">
      <button
        type="button"
        className="text-primary"
        data-toggle="modal"
        data-target="#add-log-modal"
      >
        <i className="fas fa-plus-circle"></i>
      </button>{' '}
      <button
        type="button"
        className="text-danger"
        data-toggle="modal"
        data-target="#add-tech-modal"
      >
        <i className="fas fa-user-plus"></i>
      </button>{' '}
      <button
        type="button"
        className="text-success"
        data-toggle="modal"
        data-target="#tech-list-modal"
      >
        <i className="fas fa-user"></i>
      </button>
    </div>
  );
};

export default AddButton;
