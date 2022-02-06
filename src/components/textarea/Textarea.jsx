import React, {useState} from 'react';
import classes from './Textarea.module.css';

const Textarea = (props) => {

  return (
    <label className={classes.customTextarea}>
      {props.name} <textarea {...props} />
    </label>
  )
}

export default Textarea;
