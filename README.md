<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tukno/rocket-shoes">
    <img src="src/assets/images/logo-black.svg" alt="Logo" width="200" height="50">
  </a>

  <h3 align="center">Rocketshoes</h3>

  <p align="center">
    A fictitious shoes store made during the bootcamp to learn the usage of React Redux + Sagas + Hooks.
    <br />
    <a href="https://github.com/tukno/rocket-shoes"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://tukno-rocket-shoes.netlify.com/">View Demo</a>
    ·
    <a href="https://github.com/tukno/rocket-shoes/issues">Report Bug</a>
    ·
    <a href="https://github.com/tukno/rocket-shoes/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

**WEB:**

[![Rocketshoes][product-screenshot-home]](https://tukno-rocket-shoes.netlify.com/)

[![Rocketshoes][product-screenshot-cart]](https://tukno-rocket-shoes.netlify.com/cart)

This application allows a user to:

- Add and Remove shoes from cart;
- Change the amount of shoes in cart;

Aditional features:

- Calculates the total price of items in the cart and shows it to the user.

### Built With

Main libraries and CLI tools used to built the project:

- [Axios](https://github.com/axios/axios)
- [Create react app](https://github.com/facebook/create-react-app)
- [Immer](https://github.com/immerjs/immer)
- [JSON Server](https://github.com/typicode/json-server)
- [React](https://github.com/facebook/react)
- [React icons](https://github.com/react-icons/react-icons)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Saga](https://github.com/redux-saga/redux-saga)
- [React Toastify](https://github.com/fkhadra/react-toastify)
- [Styled components](https://github.com/styled-components/styled-components)

To manage the code style and formatting:

- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [EditorConfig](https://editorconfig.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

Install NodeJS:

- [node](https://nodejs.org/en/)

Install a package manager:

- [yarn](https://classic.yarnpkg.com/lang/en/): Yarn 1.x (classic) was used in this project.

or

- npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository:

   ```sh
   Using ssh:
   git clone git@github.com:tukno/rocket-shoes.git

   Or using https:
   git clone https://github.com/tukno/rocket-shoes.git
   ```

2. Install the project dependencies:

   ```sh
   cd rocket-shoes

   yarn
   ```

   or using npm:

   ```sh
   cd rocket-shoes

   npm install
   ```

3. Open one terminal window and start the json-webserver, it emulates a fake REST API that will provide the products for the page that are stored in the `db.json` file:

   ```sh
   yarn json-server db.json -p 3333 -w
   ```

4. Open another terminal windows and start the development server:

   ```sh
   yarn start
   ```

   You can now view rocket-shoes in the browser at: `http://localhost:3000/`

5. You are done with configuration and ready to code! (I hope so :tada:).

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROADMAP -->

<!-- ## Roadmap

See the [open issues](https://github.com/tukno/rocket-shoes/issues) for a list of proposed features (and known issues). -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

David Oliveira - oliveiradavid.dev@gmail.com

Project Link: [https://github.com/tukno/rocket-shoes](https://github.com/tukno/rocket-shoes)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)
- [My JSON Server](https://my-json-server.typicode.com/): Fake Online JSON REST server for the production build (Since it is still in Beta version at the moment, the live demo of Rocket shoes may be offline).

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/tukno/rocket-shoes.svg?style=flat-square
[contributors-url]: https://github.com/tukno/rocket-shoes/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tukno/rocket-shoes.svg?style=flat-square
[forks-url]: https://github.com/tukno/rocket-shoes/network/members
[stars-shield]: https://img.shields.io/github/stars/tukno/rocket-shoes.svg?style=flat-square
[stars-url]: https://github.com/tukno/rocket-shoes/stargazers
[issues-shield]: https://img.shields.io/github/issues/tukno/rocket-shoes.svg?style=flat-square
[issues-url]: https://github.com/tukno/rocket-shoes/issues
[license-shield]: https://img.shields.io/github/license/tukno/rocket-shoes.svg?style=flat-square
[license-url]: https://github.com/tukno/rocket-shoes/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tukno
[product-screenshot-home]: src/assets/images/home.png
[product-screenshot-cart]: src/assets/images/cart.png
