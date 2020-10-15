import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Review} from '../components/review'

const ReviewPage = () => <>
    <BrowserRouter>
        <div className="main">
            <Switch>
                <Route exact path="/review" component={Review}/>              
            </Switch>
        </div>
    </BrowserRouter>
    </>

export default ReviewPage