import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AddNewListStyles = styled.div`
  display: flex;
  align-items: center;
  padding: 12.5px;
  max-width: 300px;
  background-color: #eee;
  cursor: pointer;
  .icon {
    margin-right: 5px;
  }
`;

const AddNewListFormStyles = styled.form`
  padding: 12.5px;
  max-width: 300px;
  background-color: #eee;
  border-radius: 5px;
  input {
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 1rem;
  }
`;

function AddNewListButton(props) {
  return (
    <AddNewListStyles onClick={props.onAddNewClick}>
      <span className="icon">
        <i class="fas fa-plus" />
      </span>
      Add new list
    </AddNewListStyles>
  );
}

AddNewListButton.propTypes = {
  onAddNewClick: PropTypes.func.isRequired,
};

function AddNewListForm(props) {
  return (
    <AddNewListFormStyles
      onSubmit={e => {
        e.preventDefault();
        props.onSubmit();
      }}
    >
      <input type="text" placeholder="Enter name of list" />
      <button className="button is-primary is-outlined">Add List</button>
    </AddNewListFormStyles>
  );
}

AddNewListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onOutsideClick: PropTypes.func.isRequired,
};

function AddNewList(props) {
  const [isAdding, setIsAdding] = useState(false);

  function toggle() {
    setIsAdding(!isAdding);
  }

  return isAdding ? (
    <AddNewListForm onSubmit={() => {}} onOutsideClick={toggle} />
  ) : (
    <AddNewListButton onAddNewClick={toggle} />
  );
}

export default AddNewList;
