import styled from '@emotion/styled';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';

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

type Props = {
  message: string;
};

export const Message: FC<Props> = (props) => {
  const { message } = props;
  return (
    <MessageCtn>
      <MessageBody>
        <ReactMarkdown skipHtml={false} allowedElements={['div', 'p']}>
          {message}
        </ReactMarkdown>
      </MessageBody>
    </MessageCtn>
  );
};
