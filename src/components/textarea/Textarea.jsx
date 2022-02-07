import React, {useState} from 'react';
import classes from './Textarea.module.css';

const Textarea = (props) => {

  return (
    <label className={classes.customTextarea}>
      {props.name}
      <div>
        <textarea {...props} />
      </div>
    </label>
  )
}

export default Textarea;
