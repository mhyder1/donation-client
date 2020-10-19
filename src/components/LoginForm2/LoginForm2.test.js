import LoginForm2 from './LoginForm2.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("LoginForm2", () => {
    it("form renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BrowserRouter><LoginForm2 /></BrowserRouter>, div);
    });
  });