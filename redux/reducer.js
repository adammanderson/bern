export const GET_REGIONAL = 'GET_REGIONAL/LOAD';
export const GET_REGIONAL_SUCCESS = 'GET_REGIONAL/LOAD_SUCCESS';
export const GET_REGIONAL_FAIL = 'GET_REGIONAL/LOAD_FAIL';
export const GET_POSTCODE =  'GET_POSTCODE/LOAD';
export const GET_POSTCODE_SUCCESS =  'GET_POSTCODE/LOAD_SUCCESS';
export const GET_POSTCODE_FAIL = 'GET_POSTCODE/LOAD_FAIL';

export default function reducer(state = { region: {}, postcode: {} }, action) {
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
    case GET_POSTCODE:
      return { ...state, loading: true };
    case GET_POSTCODE_SUCCESS:
      return { ...state, loading: false, postcode: action.payload.data.result };
    case GET_POSTCODE_FAIL:
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

export function getPostcode(postcode) {
  return {
    type: GET_POSTCODE,
    payload: {
      client: 'postcodes',
      request: {
        url: `${postcode}`
      }
    }
  }
}
