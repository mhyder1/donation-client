import NavBar from './NavBar';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("NavBar", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BrowserRouter><NavBar /></BrowserRouter>, div);
    });
  });