import React from 'react';
import color from '../data/color';

const Bar = (props) => {
  return (
    <li className={props.serv} style={{
      display: 'inline-block',
      width: (props.val * 100) + 'px',
      height: '4px',
      position: 'absolute',
      top: 8 + (props.num * 4) + 'px',
      left: '0',
      backgroundColor: color(props.serv, props.highlight),
      opacity: (props.val / 10) + 0.2
    }}></li>
  )
};

export default Bar;
