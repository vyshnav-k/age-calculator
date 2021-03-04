import React from "react";
import { useSelector} from "react-redux";
import TeenProduct from './products/teenproduct'
import MiddleProduct from './products/middleproducts'
import ElderProduct from './products/elderproducts'
import './agecalc.css'

function ShowProducts() {
  console.log("hellooo");
  const category = useSelector((state) => state.ageCalc.category);
  if(category==="Teen Ager"){
    return (
        <div className="Showproducts">
          <div>
           <h4>Your are a {category}</h4>
           <TeenProduct/>
          </div>
        </div>
      );
  }else if(category==="Middle aged"){
    return (
        <div className="Showproducts">
          <div>
          <h4>Your are a {category}</h4>
          <MiddleProduct/>
          </div>
    
        </div>
      );
  }else{
    return (
        <div className="Showproducts">
          <div>
          <h4>Your are a {category}</h4>
          <ElderProduct/>
          </div>
        </div>
      );
  }


  return null;
}

export default ShowProducts;
