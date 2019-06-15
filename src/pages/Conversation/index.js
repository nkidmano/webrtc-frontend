import React from 'react';
import styled from 'styled-components';

import ConversationBar from './ConversationBar';
import ConversationList from './ConversationList';
import ConversationHeader from './ConversationHeader';

import { conversationList } from '../../constants/mocks';

const ConversationStyles = styled.div`
  width: 100%;
`;

function Conversation() {
  return (
    <ConversationStyles>
      <ConversationHeader title="# General" />
      <ConversationList conversationList={conversationList} />
      <ConversationBar />
    </ConversationStyles>
  );
}

export default Conversation;
