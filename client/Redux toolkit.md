1.First we install redux and reduxjs/toolkit
<img width="237" alt="Screenshot 2022-04-15 at 14 25 49" src="https://user-images.githubusercontent.com/74420607/163576231-f55310c2-0b8d-4711-96bd-ce53032807fa.png">
<hr>
2.We create our store file where we will pass our data from the counterSlice
<img width="312" alt="Screenshot 2022-04-15 at 14 28 30" src="https://user-images.githubusercontent.com/74420607/163576476-e7ff5e95-22b3-48f1-8abd-2607fb5081cc.png">
<hr>
3.We wrap our App main file with a provider and we pass the store as component
<img width="468" alt="Screenshot 2022-04-15 at 14 29 31" src="https://user-images.githubusercontent.com/74420607/163576583-5b1fc000-eff2-4d61-b370-ccb9397f49c3.png">
<hr>
4.We create the redux state with all the function that change the state
<img width="492" alt="Screenshot 2022-04-15 at 14 39 06" src="https://user-images.githubusercontent.com/74420607/163577567-b9ea4f20-2ca8-41b9-a345-e2039b462482.png">
<hr>
5.import the redux and pass it on the store variable containing the configure store function
<img width="351" alt="Screenshot 2022-04-15 at 14 56 46" src="https://user-images.githubusercontent.com/74420607/163579588-40b6294e-2ce8-4db2-8ceb-d06e7a954f9a.png">
<hr>
6. we can import useSelectro,useDispatch and all the counterslice action we deconstruct previously
 <img width="549" alt="Screenshot 2022-04-15 at 15 01 37" src="https://user-images.githubusercontent.com/74420607/163580084-54e4213d-4653-412b-8f21-6b56b90cf753.png">
<hr>
