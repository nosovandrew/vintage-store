import type { AppProps } from 'next/app';

import GlobalStyle from '@/styles/style.global';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}
