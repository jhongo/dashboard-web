import React from 'react';
import { Provider } from 'react-redux';
import { AppRoute } from './routers/AppRoute';
import { store } from './store/store';

export const DashboardApp = () => {
    return (
        <Provider store={store}>

            <AppRoute />
            
        </Provider>
    )
}
