import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      className="h-full scroll-smooth bg-background text-text antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <title>Delightful Button Demo</title>
        <meta
          name="description"
          content="A delightful button designed to bring joy to all users who click it."
        />
      </Head>
      <body className="bg-eggshell text-text flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
