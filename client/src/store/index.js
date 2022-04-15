import {createStore} from 'redux'

const reducerFn = (state={counter:10},action)=>{//the counter value we send on our app.js
  
  //set the different actions
  if(action.type === 'increment'){
    return {counter:state.counter + 1}
  }
  if(action.type === 'decrement'){
    return {counter:state.counter - 1}
  }
  if(action.type === 'add'){
    return {counter:state.counter + action.payload}
  }
  return state
}



const store = createStore(reducerFn)


export default store;