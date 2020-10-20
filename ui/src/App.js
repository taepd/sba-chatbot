import React from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Switch, Redicrect} from 'react-router-dom'
import MainPage from './pages/MainPage'

import store from './store'    // /index를 붙이든 안붙이든 정상작동한다 그 이유는??


const App = () => 
  <>
  <Provider store = {store}>
    <div style={{width: "1000px",margin: "0 auto"}}>
     <MainPage/>
    </div>
  </Provider>
  </>

export default App;