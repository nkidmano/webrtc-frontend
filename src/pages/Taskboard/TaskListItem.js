import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TaskListItemStyles = styled.div`
  border: 1px solid #363636;
  border-radius: 4px;
  margin-bottom: 5px;
  .task-header {
    background-color: #eee;
    padding: 5px 10px;
    margin-bottom: 0 !important;
    .icon {
      cursor: pointer;
      transition: opacity 0.2s ease 0s;
      opacity: 0.3;
    }
    .icon:hover {
      opacity: 1;
    }
  }
  .task-body {
    padding: 10px;
    background-color: #fff;
  }
  .task-footer {
    padding: 10px;
    font-size: 14px;
    background-color: #fff;
    .icon {
      width: 27.5px;
      height: 27.5px;
    }
    .icon:not(:last-child) {
      margin-right: -10px;
    }
    .icon img {
      border-radius: 50%;
      border: 1.5px solid #fff;
    }
  }
`;

function TaskListItem(props) {
  return (
    <TaskListItemStyles>
      <ul className="level task-header">
        <li className="level-left">
          <p className="level-item  has-text-weight-bold">{props.title}</p>
        </li>
        <li className="level-right">
          <span className="icon">
            <i className="fas fa-edit" />
          </span>
          <span className="icon">
            <i className="far fa-trash-alt" />
          </span>
        </li>
      </ul>
      <p className="task-body">{props.description}</p>
      <ul className="level task-footer">
        <li className="level-left">
          <span className="icon">
            <i className="fas fa-comments" />
          </span>
          {props.commentNum}
        </li>
        <li className="level-right">
          {props.assigneeList.map((item, index) => (
            <span className="icon" key={index}>
              <img src={item.avatar} alt="Avatar" />
            </span>
          ))}
        </li>
      </ul>
    </TaskListItemStyles>
  );
}

TaskListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  commentNum: PropTypes.string.isRequired,
  assigneeList: PropTypes.array.isRequired,
};

export default TaskListItem;
