import React from 'react';
import styled from 'styled-components';
import { conversationMessages } from '../../constants/mocks';

const AvatarStyles = styled.figure`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const MessageStyles = styled.div`
  padding: 12.5px 15px;
  background-color: #ddd;
  border-radius: 10px;
  min-width: 350px;
`;

const MessageListStyles = styled.div`
  /* 50px is the MessageBar height */
  padding: 10px 20px;
  width: 100%;
  overflow: auto;
  height: calc(100vh - 50px);
`;

const MessageListItemStyles = styled.div`
  display: flex;
  padding: 10px 0;
`;

const MessageBar = styled.input`
  width: 100%;
  padding: 12.5px;
  border: 0;
  font-size: 1rem;
  border: 1px solid #ccc;
  background-color: #eee;
`;

function Taskboard() {
  return (
    <div style={{ width: '100%' }}>
      <MessageListStyles>
        {conversationMessages.map(message => (
          <MessageListItemStyles>
            <AvatarStyles>
              <img src={message.image} placeholder="Avatar" />
            </AvatarStyles>
            <MessageStyles>
              <p className="has-text-weight-bold">{message.user}</p>
              <p className="has-text-black-bis">{message.text}</p>
            </MessageStyles>
          </MessageListItemStyles>
        ))}
      </MessageListStyles>
      <MessageBar placeholder="Enter your message" />
    </div>
  );
}

export default Taskboard;
