import { NextSeo } from 'next-seo';
import { DemoApiBlock } from '../blocks/demo-api.block';
import { MainLayout } from '@/components/layout/main-layout';
import { Jumbotron } from '@/features/home/blocks/jumbotron';
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
        <Jumbotron />
        <div className={'pt-8'} />
        <DemoApiBlock />
      </MainLayout>
    </>
  );
};
