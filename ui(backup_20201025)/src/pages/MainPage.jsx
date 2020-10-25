import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Main} from '../components'
import {ShopPage, ReviewPage} from '../pages'

const MainPage = () => <>
    <BrowserRouter>
        <div className="main">
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/shop" component={ShopPage}/>
                <Route exact path="/review" component={ReviewPage}/>
            </Switch>
        </div>
    </BrowserRouter>
    </>

export default MainPage