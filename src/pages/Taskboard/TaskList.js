import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TaskListItem from './TaskListItem';

const TaskListStyles = styled.div``;

function TaskList(props) {
  return (
    <TaskListStyles>
      {props.taskList.map((task, index) => (
        <TaskListItem
          key={index}
          title={task.title}
          description={task.description}
          commentNum={task.commentNum}
          assigneeList={task.assigneeList}
        />
      ))}
    </TaskListStyles>
  );
}

TaskList.propTypes = {
  taskList: PropTypes.array.isRequired,
};

export default TaskList;
