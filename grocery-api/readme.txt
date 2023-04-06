# Redux

- it is a javascript based library used for state management

state = data

- the idea is to maintain data centrally / globally which can be accessed by any component irrespective of thr position and order of the component otherwise we have to pass the data to each and every component in the component tree

misconseption - redux is a part of react library which is not true
redux can be used in any project which is using javascript


# Redux Architecture
it consist of three main component
- store
- action
- reducer


store - a place where an entire state of the app is listed and manageing the status of the app at given point of time


action - a pure object contained within store having the information about the user event, the action is send from the view to reducer


reducer - reducer os a function which is able to read the [ayload from the action and then execute updating the store



Steps: 
1. install required packages
> npm i redux
> npm i react-redux

2. create store/index.js

3. create initialState

4. create a reducer

5. create a store

6. configure store with react app

7. consume store in the component



Redux DevTools
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en



https://github.com/zalmoxisus/redux-devtools-extension
