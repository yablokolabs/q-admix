import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script 
          defer 
          src='https://static.cloudflareinsights.com/beacon.min.js' 
          data-cf-beacon='{"token": "ac63bbdd99d645309172c615bf8ec446"}'
        />
      </Head>
      <body className='bg-gray-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
