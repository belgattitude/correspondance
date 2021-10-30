import styled from '@emotion/styled';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { messages } from '../data/messages';

const MessageCtn = styled.div`
  padding: 3rem;
  font-size: 2.4em;
  line-height: 1.25em;
  @media (min-width: 1000px) {
    padding: 8rem;
    font-size: 5em;
  }

  @media (min-width: 600px) and (max-width: 999px) {
    line-height: 1.18em;
    padding: 4rem;
    font-size: 4em;
  }
`;

const MessageBody = styled.div`
  font-weight: 800;
  font-variation-settings: 'wght' 700;
  //font-weight: bolder;

  color: dimgrey;
  p {
    margin-top: 1em;
    em {
      font-synthesis: none;
      font-variation-settings: 'slant' 18, 'wght' 200;
    }
  }
`;

const message = messages[2];

export const Message: FC = (_props) => {
  return (
    <MessageCtn>
      <MessageBody>
        <ReactMarkdown>{message}</ReactMarkdown>
      </MessageBody>
    </MessageCtn>
  );
};
