import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';
import HomePage from '../../features/home/HomePage';
import EventDetailtedPage from '../../features/events/eventDetailted/EventDetailtedPage';
import EventFrom from '../../features/events/eventForm/EventForm';

export default function App() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Navbar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailtedPage} />
              <Route path={['/createEvent', '/manage/:id']} component={EventFrom} />
            </Container>
          </>
        )}
      />
    </>
  );
}
