import GlobalStyles from "@/commons/styles/globalStyles";
import { darkTheme, lightTheme } from "@/commons/styles/theme";
import Layout from "@/components/layout/Layout";
import { toggleTheme } from "@/redux/features/themeSlice";
import { ReduxProviders } from "@/redux/providers";
import ReactQueryProviders from "@/utils/reactQuery/reactQueryProvider";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.theme);
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme && localTheme !== theme) {
      dispatch(toggleTheme());
    }
  }, [theme, dispatch]);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const selectedTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <>
      <ReduxProviders>
        <ThemeProvider theme={selectedTheme}>
          <ReactQueryProviders>
            <Layout>
              <GlobalStyles />
              <Component {...pageProps} />
            </Layout>
          </ReactQueryProviders>
        </ThemeProvider>
      </ReduxProviders>
    </>
  );
}
