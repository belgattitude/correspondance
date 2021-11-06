import styled from '@emotion/styled';
import type { FC } from 'react';
import FooterWaves from '@/public/images/layout/footer-waves.svg';

const BgWaved = styled(FooterWaves)`
  object-fit: cover;
  position: absolute;
  width: 100%;
  object-position: center;
  display: block;
`;

const FooterCtn = styled.footer`
  //background-image: url('/images/layout/footer-waves.svg');
  //background-image: url(${() => FooterWaves.url});
  display: grid;
  .content,
  .bgImage {
    grid-area: 1 / 1;
  }
  .bgImage {
    z-index: -1;
  }
`;

export const MainFooter: FC = () => {
  return (
    <FooterCtn>
      <div className={'bgImage'}>
        <BgWaved />
      </div>
    </FooterCtn>
  );
};
