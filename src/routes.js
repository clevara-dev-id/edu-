import React, { lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './views/Home';
import Search from './views/Search';
import Detail from './views/Detail';
import DetailSecondary from './views/DetailSecondary';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import Page404 from './views/errors/Page404';

const BaseRoute = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/detail" component={Detail} />
                <Route exact path="/detailsecondary" component={DetailSecondary} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route path="" component={Page404} />
            </Switch>
        </>
    )
}

export default BaseRoute
