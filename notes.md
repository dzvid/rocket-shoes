1 Configure development environment:

- Install ESLint, Prettier and EditorConfig.

---

2 Configure the application routes:

- Install the react-router-dom library:
  ```sh
  yarn add react-router-dom
  ```
- Create the pages folder: src/pages

- Create the file that will contain the routes component: src/routes.js

---

3 - Add library for writing styled in javascript:

```sh
yarn add polished
```

We gonna use it to make a color brighter/darken, etc.

---

4 Add a library to simulate an API from a json file:

```sh
yarn add json-server -D
```

To execute the fake API run the following command:

```sh
yarn json-server server.json -p 3333 -w
```

---

5 Loading API products:

- To format the product price create the file src/utils/format.js

---

6 Redux installation and configuration:

- Install the Redux library and the react integration lib:

  ```sh
  yarn add redux react-redux
  ```

- Create a folder `src/store` to keep Redux files

  - Create a file index.js to keep the redux settings:

    > createStore to create the global state (needs a reducer at creation time)
    > Provider makes the Redux store available to the components through connect() calls

- Create a folder `src/store/modules` to keep the reducers and modules related to redux:
  - Create the file `src/store/modules/cart/reducer.js` for the cart reducer
- When the project has many reducers its necessary to create a file/module to combine them, so:
  - Create the file `src/store/modules/rootReducer.js` to combine the reducers. When you create a new reducer (i.e: user reducer) import it in the rootReducer and use the combineReducers method from redux library togheter with the other reducers.

---

7 Add item to cart

- When the user click in add to cart, the object is passed to the cart reducer.
  For this the `connect()` method from react-redux will be used. The method allows the component to connect to the redux store state (remember we added the Provider component in the App as a wrapper of the application components, the provider makes the connect method actually works).
  Each component connected to redux has a `dispatch` prop, this method allows to send the actions to the reducer/redux (When a dispatch method is executed, all the reducers listen to all the actions. They proccess the action according to the action type supported).
  The values can be retrivied in the reducer using its arguments: state and action. Use a switch inside the reducer to check the action type and decide hich action to realize.

  PS: In Redux the State Tree uses the Singleton pattern and the connect method uses the Observer pattern.
  In Redux, the convention is to have a single store per application, usually separated into data domains internally (you can create more than one Redux store if needed for more complex scenarios). Flux has a single dispatcher and all actions have to pass through that dispatcher. It's a singleton object.

Ok, you saved the data in the redux store,
but how to retrieve this data in another component?

- Each reducer is a Redux store (state) property and can be acessed using the `connect` method from react-redux.
  Pass a function as a parameter to the connect method to
  get the current global state and then return the respective reducer property.
  The reducer property is received as a prop in the component.

  **When the reducer updates the state, guess what? it triggers a render to all the components that have the connect method (Observer pattern), that will update the values in the respectives components that depend on the respective state.**
