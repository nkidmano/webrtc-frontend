import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ConversationListItem from './ConversationListItem';

const ConversationListStyles = styled.div`
  width: 100%;
  overflow: auto;
  padding: 10px 20px;
  /* 47.6px is the ConversationBar height */
  /* 50px is the ConversationHeader height */
  height: calc(100vh - 47.6px - 50px);
`;

function ConversationList(props) {
  return (
    <ConversationListStyles>
      {props.conversationList.map((conversation, index) => (
        <ConversationListItem key={index} {...conversation} />
      ))}
    </ConversationListStyles>
  );
}

ConversationList.propTypes = {
  conversationList: PropTypes.array.isRequired,
};

export default ConversationList;
