import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TaskboardListItem from './TaskboardListItem';
import AddNewList from './AddNewList';

const TaskboardListStyles = styled.div`
  padding: 12.5px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-gap: 20px;
`;

function TaskboardList(props) {
  return (
    <TaskboardListStyles>
      {props.taskboardList.map((taskboard, index) => (
        <TaskboardListItem
          key={index}
          title={taskboard.title}
          taskList={taskboard.taskList}
        />
      ))}
      <AddNewList onSubmitForm={() => {}} />
    </TaskboardListStyles>
  );
}

TaskboardList.propTypes = {
  taskboardList: PropTypes.array.isRequired,
};

export default TaskboardList;
