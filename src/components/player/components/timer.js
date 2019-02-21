import React from 'react';
import Typography from '@material-ui/core/Typography'
import './timer.css';

function leftPad(number) {
  const pad = '00';
  return pad.substring(0, pad.length - number.length) + number;
}

function formattedTime(secs) {
  const minutes = parseInt(secs / 60, 10);
  const seconds = parseInt(secs % 60, 10);
  return `${minutes} : ${leftPad(seconds.toString())}`
}

function Timer(props) {
  return (
    <div className="Timer">
      <Typography>
        <span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
      </Typography>
    </div>
  )
}

export default Timer;
