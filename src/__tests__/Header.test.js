// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import React from "react";

// import Header from "../components/Header";

// test("displays the text 'hello from the Header!'", () => {
//   render(<Header />);

//   expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
// });

import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

const Header = () => {
 return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
 );
};

export default Header;
