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



<img width="338" alt="Screenshot 2022-04-15 at 11 36 07" src="https://user-images.githubusercontent.com/74420607/163561279-2c2fdb3b-e9ec-4499-ba50-eb0e0866d6b6.png">

<hr/>

4.similar to context api we now go on index.js and :<br/>
  -we import the Provider that wrap all the application<br/>
  -we import the store<br/>
  -we wrap the App component with the Provider an we pass the store element as a prop
  
<img width="466" alt="Screenshot 2022-04-15 at 11 48 54" src="https://user-images.githubusercontent.com/74420607/163562398-52a98d37-f938-485e-a810-f4c354bb9fe3.png">

<hr>

