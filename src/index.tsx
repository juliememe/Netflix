import React from "react";
import ReactDOM from "react-dom";
import style from './index.scss';
import cat from './assets/cat.jpg';

const rootElement = document.getElementById("app");

ReactDOM.render(<>
    <h1 className={style.test}>Hello world!</h1>
    <h2>Stupid!</h2>
    <div className={style.catBox}><img src = {cat} className={style.cat}/></div>
     </>
    , rootElement);