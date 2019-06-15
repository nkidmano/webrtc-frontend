import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ConversationHeaderStyles = styled.div`
  padding: 12.5px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
`;

function ConversationHeader(props) {
  return <ConversationHeaderStyles>{props.title}</ConversationHeaderStyles>;
}

ConversationHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ConversationHeader;
