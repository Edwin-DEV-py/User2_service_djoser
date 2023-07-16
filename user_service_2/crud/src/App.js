import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './containers/Home.js';
import Login from './containers/Login.js';
import Regitser from './containers/Register.js';
import Activate from './containers/Activate.js';
import Reset from './containers/Reset.js';
import ResetConfirm from './containers/ResetConfirm.js';
import Layout from './hocs/Layout.js'
import { Provider } from 'react-redux';
import store from './store.js';

const App = () =>{
  return (
  <Provider store={store}>
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route Component={Home} path="/"/>
        <Route Component={Login} path="login/"/>
        <Route Component={Regitser} path="/register"/>
        <Route Component={Activate} path="/activate/:uid/:token"/>
        <Route Component={Reset} path="/reset-password"/>
        <Route Component={ResetConfirm} path="/password/reset/confirm/:uid/:token"/>
      </Routes>
    </Layout>
  </BrowserRouter>
  </Provider>
  )
}


export default App;