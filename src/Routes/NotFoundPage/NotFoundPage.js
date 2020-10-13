import './NotFoundPage.css'
import React from 'react';


const NotFoundPage = (props) => {
  return (
    <div className="notFound">
      <h2>404 - Page not found</h2>
      <p>Uh Oh! Looks like you've ventured off the map.</p> 
    </div>
  );
}

NotFoundPage.defaultProps = {
  history: {
    push: () => {},
  },
}

export default NotFoundPage;