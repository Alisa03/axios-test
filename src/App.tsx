import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './hooks/useDarkMode';

import AppRouter from "./AppRouter";
import Header from "./components/layout/Header";

import GlobalStyled from "./assets/styled/globalStyled";
import { light, dark } from './assets/styled/theme';
import { AppContainer, Container } from './assets/styled/components';

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? light : dark;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyled />
      <AppContainer>

        <Router>
          <Header
            onClick={themeToggler}
            theme={theme}
          />
          <Container>

            <AppRouter />

          </Container>
        </Router>

      </AppContainer>
    </ThemeProvider>
  )
}

export default App
