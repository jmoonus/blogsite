import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BlogPage from './BlogPage'
import Home from './Home'

const AppRouter = () => (
    <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/home" component = {Home}/>
        <Route path = "/blog" render = {({blog}) => <BlogPage blog = {blog}/>}/>
    </Switch>
)

export default AppRouter