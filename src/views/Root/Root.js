import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../../routes/ProtectedRoute';
import { store, persistor } from './../../store';
import { Provider } from 'react-redux';
import { AuthProvider } from '../../context/AuthContext';
import GlobalStyle from '../../theme/GlobalStyle';
import LoginView from '../LoginView/LoginView';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import DashboardView from '../DashboardView/DashboardView';
import ScheduleView from '../ScheduleView/ScheduleView';
import CalendarView from '../CalendarView/CalendarView';
import SubjectsView from '../SubjectsView/SubjectView';
import NotesView from '../NotesView/NotesView';
import NoteDetailsView from '../NoteDetailsView/NoteDetailsView';
import TodoView from '../TodoView/TodoView';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <BrowserRouter>
            <GlobalStyle />
            <div className="app">
              <Switch>
                <Route exact path="/" component={LoginView} />
                <Route exact path="/registration" component={RegistrationPage} />
                <ProtectedRoute exact path="/dashboard" component={DashboardView} />
                <ProtectedRoute exact path="/schedule" component={ScheduleView} />
                <ProtectedRoute exact path="/calendar" component={CalendarView} />
                <ProtectedRoute exact path="/subjects" component={SubjectsView} />
                <ProtectedRoute exact path="/notes" component={NotesView} />
                <ProtectedRoute exact path="/notes/:id" component={NoteDetailsView} />
                <ProtectedRoute exact path="/todo" component={TodoView} />
              </Switch>
            </div>
          </BrowserRouter>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
