import React from 'react';
import Typography from '@material-ui/core/Typography'
import './title.css';


function Title(props) {
  return (
    <div className="Title">
      <Typography variant="h2">{props.title}</Typography>
    </div>
  )
}

export default Title;
