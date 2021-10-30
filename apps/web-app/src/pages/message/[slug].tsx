import { BadRequest } from '@tsed/exceptions';
import { Asserts } from '@your-org/core-lib';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getServerSideTranslations } from '@/core/i18n/get-server-side-translations';
import { homeConfig } from '@/features/home/home.config';
import { MessagePage } from '@/features/home/pages/message.page';

type Props = {
  msgSlug: string;
};

export default function MessageRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { msgSlug } = props;
  return <MessagePage msgSlug={msgSlug} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  const { slug } = context?.params ?? {};
  Asserts.nonEmptyString(locale, () => new BadRequest('locale is missing'));
  Asserts.nonEmptyString(slug, () => new BadRequest('slug is missing'));
  const { i18nNamespaces } = homeConfig;
  return {
    props: {
      msgSlug: slug,
      ...(await getServerSideTranslations(locale, i18nNamespaces)),
    },
  };
};
