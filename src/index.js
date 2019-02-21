import React from 'react'
import ReactDOM from 'react-dom' 
import ScrollToTop from './components/tools/ScrollTop'
import './styles.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Root from './pages/Root'
import store from './store'

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <Root store={store} />
        </ScrollToTop>
    </Router>,
    document.getElementById('root')
)
