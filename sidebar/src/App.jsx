import React, { useState } from 'react';
import MyRoutes from './routers/routes';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Light, Dark } from './styles/Themes';
export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const themeStyle = theme==='light'? Light:Dark;

  return (
    <>
    <BrowserRouter>
      <Container>
        <Sidebar/>
        <MyRoutes />
      </Container>
    </BrowserRouter>
    </>
  )
}
const Container = styled.div``;

export default App
