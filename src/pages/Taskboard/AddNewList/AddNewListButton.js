import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AddNewListButtonStyles = styled.div`
  display: flex;
  align-items: center;
  padding: 12.5px;
  max-width: 200px;
  background-color: #eee;
  border-radius: 5px;
  opacity: 0.7;
  cursor: pointer;
  height: max-content;
  transition: all 0.2s ease 0s;
  &:hover {
    opacity: 1;
    max-width: 300px;
  }
  .icon {
    margin-right: 5px;
  }
`;

function AddNewListButton(props) {
  return (
    <AddNewListButtonStyles onClick={props.toggleButtonAndForm}>
      <span className="icon">
        <i className="fas fa-plus" />
      </span>
      Add new list
    </AddNewListButtonStyles>
  );
}

AddNewListButton.propTypes = {
  toggleButtonAndForm: PropTypes.func.isRequired,
};

export default AddNewListButton;
