/* import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Container from './Components/Container';
import AppBar from './Components/AppBar';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));


export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);


  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <AppBar />

          <Switch>

            <Suspense fallback={<h2>Loading...</h2>}>
              
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
              

            </Suspense>

          </Switch>
        </>
      )}
    </Container>
  )
}; */

import { Routes, Route } from 'react-router-dom';
import ContactsView from './views/ContactsView';
import Container from './components/container';
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import AppBar from './components/Navigation/AppBar/AppBar';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </Container>
  );
}

/* ----------------------------- код из дмашки 7 ---------------------------- */
// import Container from './components/container'
// import ContactForm from './components/ContactForm'
// import ContactList from './components/ContactList'
// import ContactFilter from './components/ContactFilter'
// import Spinner from './components/Spinner'
// import { useFetchContactsQuery } from './redux/contacts/contactsSlice'

// export default function App() {
//   const { data, isFetching } = useFetchContactsQuery()

//   return (
//     <Container>

//       <h1>Phoneboock</h1>
//       <ContactForm contacts={data} />

//       <h2>Contacts</h2>
//       {data && data.length >= 2 && <ContactFilter />}

//       {data && <ContactList contacts={data} />}
//       {isFetching && <Spinner />}
//     </Container>
//   )
// }
