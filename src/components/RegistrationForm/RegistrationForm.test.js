import RegistrationForm from './RegistrationForm';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("RegistrationForm", () => {
    it("form renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BrowserRouter><RegistrationForm /></BrowserRouter>, div);
    });
  });