import React from "react";
import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import store, { RootState } from "@/redux/store";
import { darkTheme, lightTheme } from "@/commons/styles/theme";
interface IThemeEmotionProps {
  children: React.ReactNode;
}

export default function EmotionProvider({ children }: IThemeEmotionProps) {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const themeToApply = isDarkMode ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeToApply}>{children}</ThemeProvider>;
}
