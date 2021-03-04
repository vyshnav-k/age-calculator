import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import ageCalcActions from '../redux/actions/ageCalcActions'
import '../input/input.css'
import Agecalc from '../Agecalc'




function Input() {
  const dispatch=  useDispatch();
  const [dob,setDob]= useState('')
  const calculateAge=()=>{
    dispatch (ageCalcActions.calculateAge({
      dob,
    }))
    
  }
  return (
    <div className="inputOuterContainer">
  <h3> <b><i>Enter your date of birth</i></b></h3>
      <div className="inputInnerContainer">
        <input className="input" type="date" name="date"   onChange={(e) => {
            setDob(e.target.value);
          }} />

        
        <button className="calc-btn" type="submit" onClick={calculateAge}>Calculate age</button>
      </div>
      <Agecalc/>
    </div>
  );
}
export default Input;
