import { css } from '@emotion/css';
import styled from '@emotion/styled';
import clsx from 'clsx';
import type { FC } from 'react';
import { useInView } from 'react-intersection-observer';
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
    //display: inline-block;
    background: linear-gradient(
      90deg,
      rgb(100, 100, 100) 0%,
      rgb(97, 93, 98) 70%,
      rgb(71, 70, 70) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-top: 1em;

    em {
      font-synthesis: none;
      font-variation-settings: 'slant' 18, 'wght' 200;
    }

    &.paragraph-active {
      opacity: 1;
      transition-property: all;
      transition-duration: 0.7s;
      transition-timing-function: ease-in;
    }

    &.paragraph-inactive {
      background: linear-gradient(
        180deg,
        rgb(150, 150, 150) 0%,
        rgb(110, 110, 110) 70%,
        rgb(90, 90, 90) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      //opacity: 0.7;
      transition: all 0.7s ease-out;
    }
  }
`;

type Props = {
  message: string;
};

type ParagraphProps = {
  // todo
};
const Paragraph: FC<ParagraphProps> = (props) => {
  const { children } = props;
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    delay: 300,
    initialInView: false,
    triggerOnce: false,
  });

  return (
    <p
      ref={ref}
      className={clsx(
        'paragraph',
        inView ? 'paragraph-active' : 'paragraph-inactive'
      )}>
      {children}
    </p>
  );
};

export const Message: FC<Props> = (props) => {
  const { message } = props;
  return (
    <MessageCtn>
      <MessageBody>
        <ReactMarkdown
          skipHtml={false}
          components={{
            p: Paragraph,
          }}>
          {message}
        </ReactMarkdown>
      </MessageBody>
    </MessageCtn>
  );
};
