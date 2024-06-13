import React from 'react'
import './checkbox.css'


const Checkbox = (props) => {
  return (
    <div>
         <label className="checkbox__container"><h1>{props.text}</h1>
  <input type="checkbox" name={props.name} checked={props.checked} onChange={props.onChange/*()=>setcheckBoxValue(!checkBoxValue.includesLowercase)*/}/>
  <span className="checkmark"></span>
  {/*console.log( props.checked )*/}
</label>
       

       
    </div>
  )
}

export default Checkbox
