import Logout from './Logout';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("Logout", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BrowserRouter><Logout /></BrowserRouter>, div);
    });
  });