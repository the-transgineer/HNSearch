import axios from 'axios';
import types from './types';
export function requesAction() {
    return {type: types.REQUEST_ACTION}
}

export function recieveAction(data) {
  return {type: types.RECIEVE_ACTION, data: data}
}
  
export function searchAction(query){
    console.log(query);
    return function(dispatch) {
      dispatch(requesAction());
      axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
        .then(response => {
          return response.data.hits;
        })
        .then(data =>  {
         dispatch(recieveAction(data))
        })
    }
}

