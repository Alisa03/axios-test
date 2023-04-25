import axios from 'axios'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './hooks/useDarkMode';

import AppRouter from "./AppRouter";

import Header from "./components/layout/Header";

import GlobalStyled from "./assets/styled/globalStyled";
import { AppContainer } from './assets/styled/AppStyles';
import { light, dark } from './assets/styled/theme';

function App() {
  const [users, setUsers] = useState<any[]>([])
  const [post, setPost] = useState<any[]>([])

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? light : dark;

  useEffect(() => {
    fetchPosts()
    fetchUsers()
  }, [])

  async function fetchPosts() {
    try {
      const response = await axios.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      setPost(response.data)

    } catch (e) {
      console.log(e)
    }
  }

  async function fetchUsers() {
    try {
      const response = await axios.get<any[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyled />
      <AppContainer>
        <Router>
          <Header
            onClick={themeToggler}
            theme={theme}
          />
          <AppRouter
            userList={users}
            postList={post}
          />
        </Router>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
