import axios from 'axios';
import types from './types';
export function requesAction(query) {
    return {type: types.REQUEST_ACTION, query}
}

export function recieveAction(data) {
  return {type: types.RECIEVE_ACTION, data: data}
}
  
export function searchAction(query){
    return function(dispatch) {
      dispatch(requesAction(query));
      axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
        .then(response => {
          return response.data.hits;
        })
        .then(data =>  {
         dispatch(recieveAction(data))
        })
    }
}

