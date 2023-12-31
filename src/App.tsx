import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './styles/theme';

import { Contacts, SidebarMenu, Topbar, Dashboard, FAQ, Geography, InputForm, Invoices, Line, Pie, Bar, Team, Calendars } from './pages';

const App: React.FC = () => {

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
                <Route path="/" element={<Dashboard />} />

                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />

                <Route path="/form" element={<InputForm />} />
                <Route path="/calendar" element={<Calendars />} />
                <Route path="/faq" element={<FAQ />} />
                
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </section>

          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
};

export default App;