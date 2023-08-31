import GlobalStyles from "@/commons/styles/globalStyles";
import { darkTheme, lightTheme } from "@/commons/styles/theme";
import EmotionProvider from "@/components/Emotion/EmotionProvider";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/transition/PageTransition";

import { ReduxProviders } from "@/redux/providers";
import store, { RootState } from "@/redux/store";
import ReactQueryProviders from "@/utils/reactQuery/reactQueryProvider";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Provider, useDispatch, useSelector } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Provider store={store}>
        <ReactQueryProviders>
          <PageTransition>
            <EmotionProvider>
              <Layout>
                <GlobalStyles />
                <Component {...pageProps} />
              </Layout>
            </EmotionProvider>
          </PageTransition>
        </ReactQueryProviders>
      </Provider>
    </>
  );
}
