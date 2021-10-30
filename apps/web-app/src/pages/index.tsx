import { BadRequest } from '@tsed/exceptions';
import type { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { getServerSideTranslations } from '@/core/i18n/get-server-side-translations';
import { homeConfig } from '@/features/home/home.config';
import { HomePage } from '@/features/home/pages/home.page';

type Props = {
  /** Add HomeRoute props here */
};

export default function IndexRoute(
  _props: InferGetServerSidePropsType<typeof getStaticProps>
) {
  return <HomePage />;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = homeConfig;
  return {
    props: {
      ...(await getServerSideTranslations(locale, i18nNamespaces)),
    },
  };
};
