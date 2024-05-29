import React from 'react'
import './generated-code.css'
import CopyIcon from '../../images/icon-copy.svg'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

const GeneratedCode = (props) => {
  const [copyText,setCopy]=React.useState("Copied");
 
  function copy(text){
   

    let stringPassword=text.toString();
    let finalPassword=stringPassword.split(',').join('');
    navigator.clipboard.writeText(finalPassword)
   console.log(finalPassword);
   setCopy("Copied");
  }


  const initialcode="P4$5W0rD!";

  return (
    <div className='generatedCode__container'>
       {props.generatedCode===""?<h1 style={{color:"gray"}}>{initialcode}</h1>:<h1>{props.generatedCode}</h1>} 
        <div className='copy__container'>
        
        <img src={CopyIcon} alt="copy_icon" onClick={() => copy(props.generatedCode)} tabIndex="0"/>
        <h1 className='copied-text'>{copyText}</h1>
        </div>
        
    </div>
  )
}

export default GeneratedCode