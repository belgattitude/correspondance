import type { EmotionCache } from '@emotion/cache';
import type {
  AppContextType,
  AppInitialProps,
  AppPropsType,
  NextComponentType,
} from 'next/dist/shared/lib/utils';
import type { DocumentContext, DocumentProps } from 'next/document';
import Document, { Html, Main, Head, NextScript } from 'next/document';
import React, { Fragment } from 'react';
import { emotionRenderStatic } from '@/core/nextjs/emotion-render-static';

type Props = DocumentProps;

type EnhancedApp = NextComponentType<
  AppContextType,
  AppInitialProps,
  AppPropsType & { emotionCache?: EmotionCache }
>;

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const { css, ids } = await emotionRenderStatic(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <Fragment>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </Fragment>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
