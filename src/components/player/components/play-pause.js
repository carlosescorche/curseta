import React from 'react';
import './play-pause.css';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';

function PlayPause(props) {
  return (
    <div className="PlayPause">
      {
        props.pause ?
          <button
            onClick={props.handleClick}
          >
            <PlayArrow className="PlayPauseIcon"/>
          </button>
        :
        <button
          onClick={props.handleClick}
        >
            <Pause className="PlayPauseIcon"/>
        </button>
      }
    </div>
  )
}

export default PlayPause
