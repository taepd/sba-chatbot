import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Main} from '../components'
import {ShopPage} from '../pages'

const MainPage = () => <>
    <BrowserRouter>
        <div className="main">
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/shop" component={ShopPage}/>
            </Switch>
        </div>
    </BrowserRouter>
    </>

export default MainPage