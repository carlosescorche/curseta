import React from 'react';
import VolumenIcon from '@material-ui/icons/VolumeUp';
import './volume.css';

function Volume(props) {
  return (
    <button
      className="Volume"
    >
      <VolumenIcon className="VolumeIcon"/>
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </button>
  )
}

export default Volume;
