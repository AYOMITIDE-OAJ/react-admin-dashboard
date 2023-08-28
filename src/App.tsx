import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './styles/theme';

import { Contacts, SidebarMenu, Topbar } from './pages';

const App = () => {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* Rest CSS */}
        <CssBaseline />

        <BrowserRouter>
          <main className="app">

            <SidebarMenu />

            <section className="content">
              <Topbar />

              <Routes>
                <Route path="/" element={<Contacts />}/>
              </Routes>

            </section>

          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
};

export default App;