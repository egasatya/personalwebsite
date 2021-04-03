import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
   render() {
      return (
         <Html>
            <Head>
               <link rel='preconnect' href='https://fonts.gstatic.com/' />
               <link
                  href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
                  rel='preload stylesheet prefetch'
                  as='style'
                  type='text/css'
                  crossOrigin='anonymous'
               />
            </Head>
            <body>
               <ColorModeScript
                  initialColorMode='light'
                  key='chakra-ui-no-flash'
               />
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}