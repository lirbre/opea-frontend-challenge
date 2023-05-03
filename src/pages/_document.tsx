import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://www.opeacapital.com/wp-content/uploads/2022/06/cropped-favicon-1-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="https://www.opeacapital.com/wp-content/uploads/2022/06/cropped-favicon-1-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="https://www.opeacapital.com/wp-content/uploads/2022/06/cropped-favicon-1-180x180.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
