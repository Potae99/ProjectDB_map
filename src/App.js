import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Travel_upload from './page/Travel_upload';
import Travel_history from './page/Travel_history';
import Travel_detail from './page/Travel_detail';

const routes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'register',
    element:<Register />
  },
  {
    path: 'travel_upload',
    element:<Travel_upload />
  },
  {
    path: 'travel_history',
    element:<Travel_history />
  },
  {
    path: 'travel_detail',
    element:<Travel_detail />
  }
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
