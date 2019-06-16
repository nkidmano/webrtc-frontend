import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

const AddNewListFormStyles = styled.form`
  padding: 12.5px;
  max-width: 300px;
  background-color: #eee;
  border-radius: 5px;
  height: max-content;
  input {
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 1rem;
  }
`;

function AddNewListForm(props) {
  AddNewListForm.handleClickOutside = props.toggleButtonAndForm;

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
  toggleButtonAndForm: PropTypes.func.isRequired,
};

const clickOutsideConfig = {
  handleClickOutside: () => AddNewListForm.handleClickOutside,
};

export default onClickOutside(AddNewListForm, clickOutsideConfig);
