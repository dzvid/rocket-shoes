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
