import React from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Switch, Redicrect} from 'react-router-dom'
import ShopPage from './pages/ShopPage'

import store from './store'    // /index를 붙이든 안붙이든 정상작동한다 그 이유는??


const App = () => 
  <>
  <Provider store = {store}>
    <div style={{width: "1000px",margin: "0 auto"}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ShopPage}/>
          {/* <Route component={Error}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>
  </>

export default App;