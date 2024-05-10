import React from 'react';

function Background({ src = '' }) {
  const style = {
    backgroundImage: `url("${src}")`,
  };

  return <div id='background' style={style}></div>;
}

export default Background;
