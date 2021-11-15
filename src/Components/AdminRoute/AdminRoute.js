import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Loading from '../Loading/Loading';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isAdmin, isLoading } = useAuth();
    if (isLoading) { return <Loading /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;