import Todo from './components/Todo/Todo'
import LoginPage from './components/Login/LoginPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NotFound from './components/Routes/NotFound';
import Home from './components/Home/Home';
import Crypto from './components/Crypto/Crypto';
import Navbar from './components/Routes/Navbar';
import ProtectedRoutes from './components/Routes/ProtectedRoutes';

const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Navbar />
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/todo"
          element={
            <ProtectedRoutes>
              <Navbar />
              <Todo />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/crypto"
          element={
            <ProtectedRoutes>
              <Navbar />
              <Crypto />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 