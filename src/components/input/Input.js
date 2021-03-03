import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import ageCalcActions from '../redux/actions/ageCalcActions'
import '../input/input.css'
import ShowAge from '../showAge'




function Input() {
  const dispatch=  useDispatch();
  const [dob,setDob]= useState('')
  const calculateAge=()=>{
    console.log(dob);
    dispatch (ageCalcActions.calculateAge({
      dob,
    }))
    
  }
  return (
    <div className="inputOuterContainer">
  <h1> Enter yoy date of birth</h1>
      <div className="inputInnerContainer">
        <input className="input" type="date" name="date"   onChange={(e) => {
            setDob(e.target.value);
          }} />

        
        <button className="calc-btn" type="submit" onClick={calculateAge}>Calculate age</button>
      </div>
      <ShowAge/>
    </div>
  );
}
export default Input;
