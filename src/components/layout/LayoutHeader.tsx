import { Theme, darkTheme, lightTheme } from "@/commons/styles/theme";
import { toggleTheme } from "@/redux/features/themeSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
// interface LayoutHeaderProps {
//   handleThemeChange: (theme: Theme) => void;
// }

export default function LayoutHeader() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  // console.log(isDarkMode.toString(), " isDarkMode");

  const stringIsDarkMode = isDarkMode.toString();

  return (
    <header>
      <HeaderWrapper>
        <button type="button" onClick={handleThemeChange}>
          Toggle Theme
        </button>
        <br />
        {/* <button type="button">dark</button> */}
        <p>{stringIsDarkMode}</p>
      </HeaderWrapper>
    </header>
  );
}

const HeaderWrapper = styled.section`
  width: 100%;
  height: 100px;
`;
