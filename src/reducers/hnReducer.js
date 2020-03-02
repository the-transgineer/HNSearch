export default (state = {}, action) => {
  console.log(action.type);
    switch (action.type) {
     case 'RECIEVE_ACTION':
      let newState = state;
      newState.results = action.data; 
      console.log(newState);
      return newState;
     default:
      return state
    }
   }