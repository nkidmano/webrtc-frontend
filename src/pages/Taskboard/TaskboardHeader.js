import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TaskboardHeaderStyles = styled.div`
  padding: 12.5px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
`;

function TaskboardHeader(props) {
  return <TaskboardHeaderStyles>{props.title}</TaskboardHeaderStyles>;
}

TaskboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskboardHeader;
