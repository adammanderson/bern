export const GET_REGIONAL = 'GET_REGIONAL/LOAD';
export const GET_REGIONAL_SUCCESS = 'GET_REGIONAL/LOAD_SUCCESS';
export const GET_REGIONAL_FAIL = 'GET_REGIONAL/LOAD_FAIL';
export const GET_ADDRESS =  'GET_ADDRESS/LOAD';
export const GET_ADDRESS_SUCCESS =  'GET_ADDRESS/LOAD_SUCCESS';
export const GET_ADDRESS_FAIL = 'GET_ADDRESS/LOAD_FAIL';

export default function reducer(state = { region: {}, address: {} }, action) {
  switch (action.type) {
    case GET_REGIONAL:
      return { ...state, loading: true };
    case GET_REGIONAL_SUCCESS:
      return { ...state, loading: false, region: action.payload.data.data[0] };
    case GET_REGIONAL_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching data'
      };
    case GET_ADDRESS:
      return { ...state, loading: true };
    case GET_ADDRESS_SUCCESS:
      return { ...state, loading: false, address: action.payload.data.result };
    case GET_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching postcode'
      };
    default:
      return state;
  }
}

export function getRegional(postcode) {
  return {
    type: GET_REGIONAL,
    payload: {
      request: {
        url: `regional/postcode/${postcode}`
      }
    }
  };
}

export function getAddress(postcode) {
  return {
    type: GET_ADDRESS,
    payload: {
      client: 'postcodes',
      request: {
        url: `${postcode}`
      }
    }
  }
}
