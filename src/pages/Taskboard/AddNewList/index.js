import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddNewListForm from './AddNewListForm';
import AddNewListButton from './AddNewListButton';

function AddNewList(props) {
  const [isAdding, setIsAdding] = useState(false);
  const toggleButtonAndForm = () => setIsAdding(!isAdding);

  return isAdding ? (
    <AddNewListForm
      onSubmit={() => {}}
      toggleButtonAndForm={toggleButtonAndForm}
    />
  ) : (
    <AddNewListButton toggleButtonAndForm={toggleButtonAndForm} />
  );
}

AddNewList.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default AddNewList;
