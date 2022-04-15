import './App.css';
import{useSelector,useDispatch} from 'react-redux'

function App() {

  const counter = useSelector((state)=>state.counter)//we target the counter inside the reducerFn
  const dispatch =useDispatch();


  console.log(counter,'check the counter container')//counter = 10 (set as default value) 
  
  const increment =() =>{
    dispatch({//check the action.type and update the state inside the redux store
      type:'increment'
    })
  }

  const decrement =()=>{
    dispatch({//check the action and update the state inside the redux store
      type:'decrement'
    })
  }

  const AddBy =()=>{
    dispatch({//check the action and update the state inside the redux store
      type:'add',
      payload:10
    })
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2> {/* counter element*/}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={AddBy}>Add Value</button>
    </div>
  );
}
export default App;
