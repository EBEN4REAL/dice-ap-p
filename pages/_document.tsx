import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import DiceImg from "../public/imgs/"

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }  // below is completely optional...
    // create a custom 'render' method for SEO tags 
    render() {
        return (
            <Html lang="en">
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="stylesheet" href="./style.css" />
                    <meta name="msapplication-TileImage" content="https://images.unsplash.com/photo-1640622660914-4b56c79bb492?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/> 
                    <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Russo+One&display=swap" rel="stylesheet" />

                    <meta property="og:description" content="Welcome to double dice betting website" />
                    <meta property="og:site_name" content="Double Dice betting"/>
                    <meta property="og:title" content="Double Dice betting" />

                    <meta name="og:image" itemProp="image" content='https://images.unsplash.com/photo-1640622660914-4b56c79bb492?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
                    <meta property="og:type" content="website" />
                    <meta property="og:image:type" content="image/jpeg"/>
                    <meta property="og:URL" content="https://doubledicebet.herokuapp.com/" />
                    <meta property="og:image:width" content="200" />
                    <meta property="og:image:height" content="200" />
                    <meta property="og:image:alt" content="double dice image" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}