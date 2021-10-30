import { StringConvert } from '@your-org/core-lib/utils/string-convert';
import { NextSeo } from 'next-seo';
import { MainLayout } from '@/components/layout/main-layout';
import { Message } from '@/features/home/blocks/message';
import { messages } from '@/features/home/data/messages';

type Props = {
  msgSlug: string;
  children?: never;
};

export const MessagePage: React.FC<Props> = (props) => {
  const { msgSlug } = props;
  const msg = messages[StringConvert.toSafeInteger(msgSlug) ?? 0];

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
