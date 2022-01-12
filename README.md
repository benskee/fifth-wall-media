<h1 align="center">Fifth Wall Media</h1>
<p align="center"><a href="https://www.linkedin.com/in/ben-skee-software-engineer/">LinkedIn</a>

## About The Project

This is a website that allows users to host a video with a webpage that changes its display based on the timestamp of the video. An active version of this project can be found at <a href="https://fifth-wall-media.herokuapp.com/">https://fifth-wall-media.herokuapp.com/</a>. The backend for the website can be found at <a href="https://github.com/benskee/fifth-wall-media-api">https://github.com/benskee/fifth-wall-media-api</a>. The hosted version of the backend with a connection to the database can be found at <a href="https://fifth-wall-media-api.herokuapp.com/api">https://fifth-wall-media-api.herokuapp.com/api</a>. (The installation assumes you have already installed <a href="https://reactjs.org">React</a>)

## Getting Started

1. Clone the repo
    ```shell
    git clone https://github.com/benskee/fifth-wall-media.git
    ```

2. Install packages
    ```sh
    npm install
    ```

3. Activate React

    ```sh 
    npm start
    ```

4. Set up backend

    Create a .env file with the url for the backend. If you clone the backend from 
    <a href="https://github.com/benskee/fifth-wall-media-api">https://github.com/benskee/fifth-wall-media-api</a> add this to the .env file
    REACT_APP_API_URL=https://localhost:5000/api

    If you are using the hosted version of the backend add this to the .env file
    REACT_APP_API_URL=https://fifth-wall-media-api.herokuapp.com/api