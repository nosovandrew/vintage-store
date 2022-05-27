import type { AppProps } from 'next/app';

import GlobalStyle from '@/styles/style.global';
import { CartContextProvider } from '@/contexts/cart';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <CartContextProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </CartContextProvider>
        </>
    );
}
