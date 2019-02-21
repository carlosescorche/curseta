import React from 'react';
import FullScreenIcon from '@material-ui/icons/Fullscreen';
import './full-screen.css';

const FullScreen = (props) => (
  <div
    className="FullScreen"
    onClick={props.handleFullScreenClick}
  >
    <FullScreenIcon className="FullScreenIcon"/> 
  </div>
)

export default FullScreen;
