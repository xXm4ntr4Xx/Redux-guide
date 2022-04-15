React redux guide

1.First we need to install redux and react redux

<img width="181" alt="Screenshot 2022-04-15 at 11 02 13" src="https://user-images.githubusercontent.com/74420607/163557838-a73ee6bf-7330-4236-ad28-a6d6b9080f69.png">
<hr/>

2.Inside the src folder we reate a store folder with an index.js file inside

<img width="172" alt="Screenshot 2022-04-15 at 11 03 58" src="https://user-images.githubusercontent.com/74420607/163558029-2439e415-d57f-4b99-a069-c935ed6bcc95.png">

<hr/>
3.Create the structure of the index.js file in the store folder (Counter example)</br>
  -import {createStore} from 'redux;<br/>
  - we create the reducerFn with all the action inside<br/>
  - const store = createStore(reducerFn)</br>
  -  we export default  the store

<img width="550" alt="Screenshot 2022-04-15 at 12 08 07" src="https://user-images.githubusercontent.com/74420607/163564063-4b8f18f2-d9fb-4708-b1b6-97e0d29724b4.png">


<hr/>

4.similar to the context api we now go on index.js and :<br/>
  -we import the Provider that wrap all the application<br/>
  -we import the store<br/>
  -we wrap the App component with the Provider an we pass the store element as a prop
  
<img width="461" alt="Screenshot 2022-04-15 at 12 23 50" src="https://user-images.githubusercontent.com/74420607/163565216-af3931b8-1dfb-4739-869d-47a0d790fe1c.png">

<hr>

5. We need : <br>
  -import useSelector and useDispatch<br>
  -create a variable with the useselector function that grab the counter <br>
  -create a variable with the useDispatch to grab the different action from the reducerFn on store/index.js<br>
  -create the different onClick function and call the different function
  
<img width="599" alt="Screenshot 2022-04-15 at 12 11 59" src="https://user-images.githubusercontent.com/74420607/163564392-c56caf38-ca28-4d88-82a9-72f9e37aca88.png">
<hr>
