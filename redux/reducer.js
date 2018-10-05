export const GET_REGIONAL = 'regional/LOAD';
export const GET_REGIONAL_SUCCESS = 'regional/LOAD_SUCCESS';
export const GET_REGIONAL_FAIL = 'regional/LOAD_FAIL';

export default function reducer(state = { region: {} }, action) {
  switch (action.type) {
    case GET_REGIONAL:
      return { ...state, loading: true };
    case GET_REGIONAL_SUCCESS:
      return { ...state, loading: false, region: action.payload.data.data[0] };
    case GET_REGIONAL_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
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
