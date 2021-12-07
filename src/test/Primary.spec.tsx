import React from "react";
import { render, screen } from "@testing-library/react";
import Primary from "../components/pages/Primary";

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('Render component', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <BrowserRouter><Primary/></BrowserRouter>              
            </Provider>
        );

    });
});