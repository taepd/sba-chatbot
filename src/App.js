import React from 'react';
import { Provider } from 'react-redux'
// import Chart from './components/Chart'
// import Dashboard from './components/Dashboard';
// import Signup from './components/SignUp'
// import SignIn from './components/SignIn'
import Blog from './components/Blog'

import store from './store'    // /index를 붙이든 안붙이든 정상작동한다 그 이유는??


const App = () => {
  return <>
  <Provider store = {store}>
  <div style={{width: "1000px",margin: "0 auto"}}>
      {/* <Signup/>  */}
      {/* <Dashboard/> */}
      {/* <SignIn/> */}
      <Blog/>
    </div></Provider>
    </>
}

export default App;