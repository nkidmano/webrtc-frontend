import React from 'react';
import styled from 'styled-components';
import AddNewList from './AddNewList';

import TaskboardHeader from './TaskboardHeader';

const TaskboardStyles = styled.div`
  width: 100%;
`;

function Taskboard() {
  return (
    <TaskboardStyles>
      <TaskboardHeader title="15/06/2019 Tasks" />
      <AddNewList />
    </TaskboardStyles>
  );
}

export default Taskboard;
