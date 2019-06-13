import React from 'react';

function Sidebar(props) {
  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <ul className="level">
        <li className="level-left">
          <i className="fas fa-home level-item" />
        </li>
        <li className="level-right">
          <i className="fas fa-bell level-item" />
          <i className="fas fa-cog level-item" />
        </li>
      </ul>
      <ul className="menu-list">
        <li>
          <a href="#" className="">
            <span className="icon">
              <i className="fas fa-comments" />
            </span>{' '}
            Conversations
          </a>

          <ul>
            <li>
              <a href="#">
                <span className="icon is-small">
                  <i className="fa fa-link" />
                </span>{' '}
                General
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="is-active">
            <span className="icon">
              <i className="fa fa-table" />
            </span>{' '}
            Voice rooms
          </a>

          <ul>
            <li>
              <a href="#">
                <span className="icon is-small">
                  <i className="fa fa-link" />
                </span>{' '}
                Babayaga
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon is-small">
                  <i className="fa fa-link" />
                </span>{' '}
                Hall of fame
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="">
            <span className="icon">
              <i className="fa fa-info" />
            </span>{' '}
            Task boards
          </a>
        </li>
      </ul>
    </aside>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
