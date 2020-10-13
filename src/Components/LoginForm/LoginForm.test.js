  
import LoginForm from './LoginForm';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("LoginForm", () => {
    it("form renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BrowserRouter><LoginForm /></BrowserRouter>, div);
    });
  });