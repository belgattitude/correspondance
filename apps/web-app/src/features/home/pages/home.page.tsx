import { RandomUtils } from '@your-org/core-lib';
import { NextSeo } from 'next-seo';
import { MainLayout } from '@/components/layout/main-layout';
import { Message } from '@/features/home/blocks/message';
import { messages } from '@/features/home/data/messages';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  const msg = messages[RandomUtils.getRandomInt(0, messages.length - 1)];
  return (
    <>
      <NextSeo
        title="Correspondances"
        description="Correspondances"
        nofollow={true}
        noindex={true}
      />
      <MainLayout>
        <Message message={msg} />
      </MainLayout>
    </>
  );
};
