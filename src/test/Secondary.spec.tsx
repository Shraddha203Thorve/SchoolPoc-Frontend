import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Secondary from "../components/pages/Secondary";
import axios from 'axios'

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Primary with React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    // it('Render component', () => {
    //     store = mockStore(initialState);
    //     const { getByText } = render(
    //         <Provider store={store}>
    //             <BrowserRouter><Secondary/></BrowserRouter>              
    //         </Provider>
    //     );
    // });

    test('fetches successfully data from an API', async () => {
        store = mockStore(initialState); 
        mockedAxios.get.mockResolvedValue( { data: {} } );
        const { getByText } = render(
            <Provider store={store}>
                <BrowserRouter><Secondary/></BrowserRouter>              
            </Provider>
        );
        expect(mockedAxios.get).toHaveBeenCalled();
      });
    
         
      test('catch block from an API', async () => {
        store = mockStore(initialState); 
        mockedAxios.get.mockRejectedValue( { data: {} } );
        const { getByText } = render(
            <Provider store={store}>
                <BrowserRouter><Secondary/></BrowserRouter>              
            </Provider>
        );
        expect(mockedAxios.get).toHaveBeenCalled();
      });
});