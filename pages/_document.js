import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Dosis:wght@300;500;700&family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
