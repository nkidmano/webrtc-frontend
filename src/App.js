import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Taskboard from './pages/Taskboard';
import Sidebar from './components/Sidebar';
import Conversation from './pages/Conversation';

function App() {
  return (
    <div className="columns is-marginless">
      <Sidebar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/taskboard" component={Taskboard} />
          <Route exact path="/conversation" component={Conversation} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
