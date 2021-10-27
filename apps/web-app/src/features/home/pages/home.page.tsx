import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import { DemoApiBlock } from '../blocks/demo-api.block';
import { homeConfig } from '../home.config';
import { MainLayout } from '@/components/layout/main-layout';
import { Jumbotron } from '@/features/home/blocks/jumbotron';
import { Message } from '@/features/home/blocks/message';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);

  return (
    <>
      <NextSeo title={t('home:page.title')} description="Correspondances" />
      <MainLayout>
        <Message />
        <Jumbotron />
        <div className={'pt-8'} />
        <DemoApiBlock />
      </MainLayout>
    </>
  );
};
