import React from 'react';
import '../styles/loading.css';

function Loading() {
  return (
    <div id='loading'>
      <Spinner />
      <h3>Please wait...</h3>
    </div>
  );
}

function Spinner() {
  return (
    <div id='loader'>
      <span></span>
    </div>
  );
}

export default Loading;
