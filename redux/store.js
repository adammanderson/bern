import axios from 'axios';
import { multiClientMiddleware } from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const clients = {
  default: {
    client: axios.create({
      baseURL: 'https://api.carbonintensity.org.uk/',
      responseType: 'json'
    })
  },
  postcodes: {
    client: axios.create({
      baseURL: 'https://api.postcodes.io/postcodes/',
      responseType: 'json'
    })
  }
}

const store = createStore(
  reducer,
  applyMiddleware(
    multiClientMiddleware(clients)
  )
);

export default store;
