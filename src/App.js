import React from 'react';
import styled from "styled-components";
import './style.css'
import theme from "styled-theming";
import {Provider as ReduxProvider} from "react-redux";
import store from './store/store';
import DarkThemeProvider from "./components/darkThemeProvider/darkThemeProvider";
import DarkThemeToggle from "./components/darkThemeToggle/darkThemeToggle";

export const backgroundColor = theme("theme", {
    light: "#fff",
    dark: "#2d2d2d",
});

export const textColor = theme("theme", {
    light: "#000",
    dark: "#fff",
});

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  font-family: Caveat;
  font-size: 18px;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

function App() {
    return (
        <ReduxProvider store={store}>
            <DarkThemeProvider>
                <Container>
                    <DarkThemeToggle/>
                </Container>
            </DarkThemeProvider>
        </ReduxProvider>
    );
}

export default App;