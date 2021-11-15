import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <Loading />
        );
    };

    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;