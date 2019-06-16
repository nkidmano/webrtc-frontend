import React from 'react';
import styled from 'styled-components';

import TaskboardHeader from './TaskboardHeader';
import TaskboardList from './TaskboardList';
import { taskboardList } from '../../constants/mocks';

const TaskboardStyles = styled.div`
  width: 100%;
`;

function Taskboard() {
  return (
    <TaskboardStyles>
      <TaskboardHeader title="15/06/2019 Tasks" />
      <TaskboardList taskboardList={taskboardList} />
    </TaskboardStyles>
  );
}

export default Taskboard;
