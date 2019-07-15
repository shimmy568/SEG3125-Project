/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

export default function NotFound() {

  // Set the timeout to redirect the user
  setTimeout(() => {
    this.props.history.push("/");
  }, 3000);

  return (
    <div>
      <h1>404 page not found.</h1>
      <h3>You will be redirected to the main page in 3 seconds</h3>
    </div>
  );
}
