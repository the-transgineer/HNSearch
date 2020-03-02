export default (state = {}, action) => {
  console.log(action.type);
  let newState = state;
    switch (action.type) {
     case 'REQUEST_ACTION': 
     if(newState.history) {
       newState.history.push(action.query);
     } else {
       newState.history = [action.query];
     }
      return newState;
     case 'RECIEVE_ACTION':
      newState.results = action.data; 
      return newState;
     default:
      return state
    }
   }