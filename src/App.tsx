import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { UsersPage } from './pages/UsersPage';
import { SensediaLogo } from './components/SensediaLogo';
import { AppHeader, HeaderInner } from './styles/styled';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AppHeader>
          <HeaderInner>
            <SensediaLogo />
          </HeaderInner>
        </AppHeader>
        <Routes>
          <Route path="/" element={<UsersPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
