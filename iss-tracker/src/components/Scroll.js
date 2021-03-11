import React from 'react';

// Scroll-able component
const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '5px solid white', height: '1000px'}}>
      {props.children}
      
    </div>
  )

};

export default Scroll;