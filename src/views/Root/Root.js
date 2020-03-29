import React from 'react';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './../../store';
import { Provider } from 'react-redux';
import GlobalStyle from '../../theme/GlobalStyle';
import DashboardView from '../DashboardView/DashboardView';
// import { MyCalendar as CalendarView } from '../CalendarView/CalendarView';
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
          <Sidebar />
          <main>
            <Switch>
              {/* <Route exact path="/" component={Root} /> */}
              <Route exact path="/dashboard" component={DashboardView} />
              <Route exact path="/calendar" component={CalendarView} />
              <Route exact path="/subjects" component={SubjectsView} />
              <Route exact path="/notes" component={NotesView} />
              <Route exact path="/notes/:id" component={NoteDetailsView} />
              <Route exact path="/todo" component={TodoView} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
