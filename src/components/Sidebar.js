import React from 'react';

function Sidebar(props) {
  return (
    <aside id="sidebar" className="column is-2">
      {/* Sidebar control START */}
      <ul className="level">
        <li className="level-left">
          <span className="icon">
            <i className="fas fa-home level-item" />
          </span>
        </li>
        <li className="level-right">
          <span className="icon">
            <i className="fas fa-bell level-item" />
          </span>
          <span className="icon">
            <i className="fas fa-cog level-item" />
          </span>
        </li>
      </ul>
      {/* Sidebar control END */}

      {/* Sidebar list START */}
      <p className="menu-label">Consersations</p>
      <ul className="menu-list">
        <li>
          <a href="#">General</a>
        </li>
        <li>
          <a href="#">Not General</a>
        </li>
        <li>
          <a href="#">+ Add conversation</a>
        </li>
      </ul>
      <p className="menu-label">Voice Rooms</p>
      <ul className="menu-list">
        <li>
          <a href="#">General</a>
        </li>
        <li>
          <a href="#">+ Add voice room</a>
        </li>
      </ul>
      <p className="menu-label">Task Boards</p>
      <ul className="menu-list">
        <li>
          <a href="#">Important</a>
        </li>
        <li>
          <a href="#">+ Add task board</a>
        </li>
      </ul>
      <p className="menu-label">Meetings</p>
      <ul className="menu-list">
        <li>
          <a href="#">+ Create a meeting</a>
        </li>
      </ul>
      {/* Sidebar list END */}
    </aside>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
