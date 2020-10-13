import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Shop} from '../components/shop'

const ShopPage = () => <>
    <BrowserRouter>
        <div className="main">
            <Switch>
                <Route exact path="/" component={Shop}/>
                {/* <Route component={Error}/> */}
            </Switch>
        </div>
    </BrowserRouter>
    </>

export default ShopPage