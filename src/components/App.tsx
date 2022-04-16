import React from "react";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import { Main } from "./main";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
