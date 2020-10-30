import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Header, Footer, Navigation , MainNavigation} from './components/common'
import { Review, Main, ReviewWritePage, UserInfo, UserPage, ShopMain, Order } from './components'
import { SignIn, SignUp } from './containers/user'  
// import {Home, User, Article, Item} from './templates'  
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

// 아직 의미 모름
const rootReducer = combineReducers({
    // itemReducer
})

const App = () => {
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return (<>
        {/* <div style={{ width: "1000px", margin: "0 auto" }}> */}

        <Router>
            <Header isAuth = {loggedIn}/>
            <Navigation/>
            <MainNavigation />
            <main>
                <Switch>
                    <Provider store={createStore(rootReducer, applyMiddleware(ReduxThunk))}>
                        <Route exact path="/" component={Main} />
                        <Route path="/main" component={Main} />
                        <Route path="/signIn" component={SignIn} />
                        <Route path="/signUp" component={SignUp} />
                        <Route path="/shop/:shop_id" component={Review} />
                        <Switch>
                            <Route path="/shops/:cat_id" component={ShopMain}/>
                            <Route path="/shops" component={ShopMain}/>
                        </Switch>
                        <Route path="/reviewwrite" component={ReviewWritePage} />
                        {/* <Route path="/userinfo" component={UserInfo} /> */}
                        <Route path="/mypage" component={UserPage} />
                        <Route path="/order/:food_id" component={Order} />
                        {/* <Redirect from={"/history"} to ={"/about/history"}/>
                        <Redirect from={"/services"} to ={"/about/services"}/>
                        <Redirect from={"/location"} to ={"/about/location"}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/events" component={Events}/>
                        <Route path="/products" component={Products}/>
                        <Route component={Error}/> */}
                    </Provider>,
                </Switch>
            </main>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </Router>
        {/* </div> */}
    </>)
}

export default App