import { NextSeo } from 'next-seo';
import { DemoApiBlock } from '../blocks/demo-api.block';
import { MainLayout } from '@/components/layout/main-layout';
import { Message } from '@/features/home/blocks/message';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  return (
    <>
      <NextSeo
        title="Correspondances"
        description="Correspondances"
        nofollow={true}
        noindex={true}
      />
      <MainLayout>
        <Message />
      </MainLayout>
    </>
  );
};
