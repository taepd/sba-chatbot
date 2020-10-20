import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Shop} from '../components/shop'
import {SignIn} from '../components/user'

const ShopPage = () => <>
    <BrowserRouter>
        <div className="main">
            <Switch>
                <Route exact path="/shop" component={Shop}/>              
            </Switch>
        </div>
    </BrowserRouter>
    </>

export default ShopPage