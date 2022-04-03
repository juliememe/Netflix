import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import 'normalize.css';
import '../src/styles/styles.scss';
import 'flowbite';

const rootElement = document.getElementById("app");


ReactDOM.render(<App/>, rootElement);