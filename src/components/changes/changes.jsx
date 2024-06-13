import React from 'react'
import './changes.css'
import Checkbox from '../boxes/mainboxes'
import ArrowIcon from '../../photos/icon-arrow-right.svg'

const SettingAdjustment = (props) => {
    let barClassname="";
    let strengthVal=props.strength;
    console.log(strengthVal)
    console.log(props.styleslider)
    
    switch(strengthVal){
        case "TOO WEAK!":
            barClassname="bar-tooweak"
            break;
        case "WEAK":
                barClassname="bar-weak"
                break;
        case "MEDIUM":
            barClassname="bar-medium"
                    break;
        case "STRONG":
                barClassname="bar-strong"
                 break;
            default:
                barClassname="bar-default"
    }
    
    return (
    <div className='setting__container'>
       
        <div className='character-length'>
        <p className='setting-title'>Character Length</p>
        <p className='slider-value'>{props.sliderValue}</p>
        {/*console.log(props.sliderValue)*/}
  
        </div>
        <div className="slidecontainer">
            <input  style={{background:props.styleslider}} onChange={props.handleChange} type="range" min="1" value={props.sliderValue} max="20"  className="slider"  />
        </div>

  <div className='check__container'>
   <Checkbox text="Includes Uppercase Letters" checked={props.checkBoxValue.includesUppercase} onChange={props.handleCheckChange} name="includesUppercase" />

  <Checkbox text="Includes Lowercase Letters" checked={props.checkBoxValue.includesLowercase} onChange={props.handleCheckChange} name="includesLowercase" />
  
  <Checkbox text="Includes Numbers" checked={props.checkBoxValue.includesNumbers} onChange={props.handleCheckChange} name="includesNumbers" />
  <Checkbox text="Includes Symbol" checked={props.checkBoxValue.includesSymbol} onChange={props.handleCheckChange} name="includesSymbol" />
  </div>

  <div className='strength__container'>
    <p className='strength-label'>STRENGTH</p>
    <div className='strength-meter'>
        <p>{props.strength}</p>
        <div className={barClassname} >
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    </div>


  </div>

  <button onClick={props.handleSubmit}>
   <p> Generate</p>
    <img src={ArrowIcon} alt="arrow" />
  </button>
    </div>
   
)}

export default SettingAdjustment