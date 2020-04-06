import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './../../store';
import { Provider } from 'react-redux';
import GlobalStyle from '../../theme/GlobalStyle';
import LoginView from '../LoginView/LoginView';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import DashboardView from '../DashboardView/DashboardView';
import CalendarView from '../CalendarView/CalendarView';
import SubjectsView from '../SubjectsView/SubjectView';
import NotesView from '../NotesView/NotesView';
import NoteDetailsView from '../NoteDetailsView/NoteDetailsView';
import TodoView from '../TodoView/TodoView';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="app">
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route exact path="/dashboard" component={DashboardView} />
            <Route exact path="/calendar" component={CalendarView} />
            <Route exact path="/subjects" component={SubjectsView} />
            <Route exact path="/notes" component={NotesView} />
            <Route exact path="/notes/:id" component={NoteDetailsView} />
            <Route exact path="/todo" component={TodoView} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
