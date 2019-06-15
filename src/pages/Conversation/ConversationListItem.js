import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ConversationListItemStyles = styled.div`
  display: flex;
  padding: 10px 0;
  img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;

const ConversationTextStyles = styled.div`
  padding: 12.5px 15px;
  background-color: #ddd;
  border-radius: 10px;
  min-width: 350px;
`;

function ConversationListItem(props) {
  return (
    <ConversationListItemStyles>
      <img src={props.image} placeholder="Avatar" />
      <ConversationTextStyles>
        <p className="has-text-weight-bold">{props.user}</p>
        <p className="has-text-black-bis">{props.text}</p>
      </ConversationTextStyles>
    </ConversationListItemStyles>
  );
}

ConversationListItem.propTypes = {
  image: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ConversationListItem;
