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
