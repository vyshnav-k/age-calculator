import React from "react";
import { useSelector } from "react-redux";
import ShowProducts from "./Showproducts";

function AgeCalc() {
  const age = useSelector((state) => state.ageCalc.age);

  console.log(age);
  if (age) {
    return (
   <div className="agecalc">
     <div>
     <h3> Your age is {age}</h3>
     </div>
    
     <div>
     <ShowProducts />
     </div>
 
   </div>
    
    )
  }
  return null;
}

export default AgeCalc;
