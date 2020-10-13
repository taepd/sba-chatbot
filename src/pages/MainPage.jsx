import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Shop} from '../components/shop'
import {SignIn} from '../components/user'

const MainPage = () => <>
    <BrowserRouter>
        <div className="main">
            <Switch>
                <Route exact path="/" component={Shop}/>
                <Route exact path="/shop" component={SignIn}/>
                
            </Switch>
        </div>
    </BrowserRouter>
    </>

export default MainPage