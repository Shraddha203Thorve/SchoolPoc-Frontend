import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react"
import Admission from "../components/pages/Admission";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import axios from 'axios'



jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  // it('Render component', () => {
  //     store = mockStore(initialState);
  //     const { getByText } = render(
  //         <Provider store={store}>
  //             <BrowserRouter><Admission/></BrowserRouter>              
  //         </Provider>
  //     );
  // });


  test('fetches successfully data from an API', async () => {
    store = mockStore(initialState);
    mockedAxios.get.mockResolvedValue({ data: {} });
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter><Admission /></BrowserRouter>
      </Provider>
    );
    expect(mockedAxios.get).toHaveBeenCalled();
    await act(async () => {
      fireEvent.click(screen.getByTestId("button"))
    })
  });


  test('catch block from an API', async () => {
    store = mockStore(initialState);
    mockedAxios.get.mockRejectedValue({ data: {} });
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter><Admission /></BrowserRouter>
      </Provider>
    );
    expect(mockedAxios.get).toHaveBeenCalled();
  });


});