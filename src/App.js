import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Travel_upload from './page/Travel_upload';

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
    path: 'travel_up',
    element:<Travel_upload />
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
