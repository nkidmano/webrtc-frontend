import React from 'react';
import styled from 'styled-components';

const ConversationBarStyles = styled.input`
  width: 100%;
  padding: 12.5px;
  border: 0;
  font-size: 1rem;
  border-top: 1px solid #ccc;
  background-color: #eee;
  outline: 0;
`;

function ConversationBar(props) {
  return <ConversationBarStyles placeholder="Enter your message" />;
}

export default ConversationBar;
