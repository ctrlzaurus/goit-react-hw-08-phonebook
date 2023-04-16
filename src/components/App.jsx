import PhonebookPage from "../pages/PhonebookPage";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { selectorIsAuth, selectorToken } from '../redux/auth/authSelector';
import MainNav from "./MainNav/MainNav";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LogInPage";
import { useEffect } from "react";
import { currentUserOperation } from "redux/auth/authOperations";
import axios from "axios";

const PrivateRoute = ({component, redirectTo = '/login'}) => {
  const isAuth = useSelector(selectorIsAuth);
  return isAuth ? component : <Navigate to={redirectTo} />
}

const PublicRoute = ({component, redirectTo = '/contacts'}) => {
  const isLoggedIn = useSelector(selectorIsAuth);
  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
};

const App = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const isAuth = useSelector(selectorIsAuth);
  const token = useSelector(selectorToken);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch(currentUserOperation(token))
    }
  }, [dispatch, token]);

  return (
    <>
      <MainNav />
      <Routes>
      <Route
          path="/contacts"
          element={<PrivateRoute component={<PhonebookPage />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={<RegisterPage />} />}
        />
        <Route
          path="*"
          element={<Navigate to="/contacts" />}
        />
      </Routes>
    </>
  )
}

export default App;