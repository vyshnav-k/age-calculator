import React from 'react'
import {useSelector} from 'react-redux'


const ShowAge=()=>{
    const age = useSelector(state => state.dob)
 

    return (
        <div> <p> {age}</p></div>
    )
    
}


export default ShowAge

