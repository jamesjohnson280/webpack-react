import React from 'react';
import ReactDOM from 'react-dom';

const App = ({ title }) => {
  return <h1>{ title }</h1>
};

ReactDOM.render(<App title="Hello React!"/>, document.getElementById('app'))
module.hot.accept();
