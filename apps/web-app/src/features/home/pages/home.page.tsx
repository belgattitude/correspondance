import { sayHello } from '@your-org/core-lib';
import { AsyncMessage, Message } from '@your-org/ui-lib';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { DemoApiBlock } from '../blocks/demo-api.block';
import { homeConfig } from '../home.config';
import { Banner } from '@/components/banner';
import { MainLayout } from '@/components/layout/main-layout';
import { Jumbotron } from '@/features/home/blocks/jumbotron';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);

  return (
    <>
      <NextSeo title={t('home:page.title')} description="Correspondances" />
      <MainLayout>
        <Jumbotron />
        <div className={'pt-8'} />
        <DemoApiBlock />
      </MainLayout>
    </>
  );
};
