import React from 'react'
import {Provider} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
import Home from './Home'
import Single from './Single'
import Video from './Video'
import NotFound from './404'

export default ({store}) => (
    <Provider store={store}>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/curso/:id/:slug' component={Single}></Route>
                <Route exact path='/clase/:id/:slug' component={Video}></Route>
                <Route component={NotFound}></Route>
            </Switch>
    </Provider>
)