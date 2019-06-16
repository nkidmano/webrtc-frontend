import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TaskList from './TaskList';

const TaskboardListItemStyles = styled.div`
  padding: 12.5px;
  background-color: #eee;
  border-radius: 5px;
  height: max-content;
`;

function TaskboardListItem(props) {
  return (
    <TaskboardListItemStyles>
      <p className="title is-5 has-text-weight-bold">{props.title}</p>
      <TaskList taskList={props.taskList} />
      <a className="button is-dark is-outlined is-fullwidth">Add new</a>
    </TaskboardListItemStyles>
  );
}

TaskboardListItem.propTypes = {
  title: PropTypes.string.isRequired,
  taskList: PropTypes.array.isRequired,
};

export default TaskboardListItem;
