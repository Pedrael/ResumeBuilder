import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {setGeneralAction} from '../../store/index.js';

import Button from "../../components/button/Button.jsx";
import Input from "../../components/input/Input.jsx";
import Textarea from "../../components/textarea/Textarea.jsx";

const General = () => {

  const dispatch = useDispatch();
  const general = useSelector(state => state.generalData);

  return (
    <div className="layout">
    {
      Object.keys(general).map((key) => (
        <div className="row" key={key}>
          <Input
            name = {key}
            value = {general[key]}
            onChange = {
              e => dispatch(setGeneralAction({...general, [key]: e.target.value}))
            }
          />
        </div>)
      )
    }
    </div>
  )
}

export default General;
