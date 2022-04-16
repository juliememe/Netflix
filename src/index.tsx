import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import 'normalize.css';
import '../src/styles/styles.scss';
import 'flowbite';

const root = ReactDOM.createRoot(document.getElementById('app') as Element);
root.render(<App/>);