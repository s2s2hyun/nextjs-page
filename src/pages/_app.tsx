import GlobalStyles from "@/commons/styles/globalStyles";
import { darkTheme, lightTheme } from "@/commons/styles/theme";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/transition/PageTransition";

import { ReduxProviders } from "@/redux/providers";
import store from "@/redux/store";
import ReactQueryProviders from "@/utils/reactQuery/reactQueryProvider";
import { ThemeProvider } from "@emotion/react";
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
            <Layout>
              <GlobalStyles />
              <Component {...pageProps} />
            </Layout>
          </PageTransition>
        </ReactQueryProviders>
      </Provider>
    </>
  );
}
