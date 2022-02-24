import React  from "react";
import { Component } from "react";
import { useState } from "react";
import "./Domains.css"
import Paragraf from "./Paragraf";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"
import {faAngleUp} from "@fortawesome/free-solid-svg-icons"

const Domains  = (props) => {
  const DomainsData=[
    {
      name:".COM",
      buy:"$5.99/yr",
      oldbuy:"$10.99/yr",
      button:"Buy now"
    },
    {
      name:".AI",
      buy:"$55.99/yr",
      oldbuy:"$10.99/yr",
      button:"Buy now"
    },
    {
      name:".NET",
      buy:"$7.99/yr",
      oldbuy:"$10.99/yr",
      button:"Buy now"
    },
    {
      name:".HEALTH",
      buy:"$7.99/yr",
      oldbuy:"$10.99/yr",
      button:"Buy now"
    },
    {
      name:".CO.UK",
      buy:"$3.99/yr",
      oldbuy:"$10.99/yr",
      button:"Buy now"
    },
    {
      name:".ORG",
      buy:"$15.99/yr",
      oldbuy:"$10.99/yr",
      button:"Buy now"
    }, {
      name:".CO",
      buy:"$26.33/yr",
      oldbuy:"$10.99/yr",
      button:"Buy now"
    },
    {
      name:".SEA",
      buy:"265.33/yr",
      oldbuy:"$10.99/yr",
      button:"Buy now"
    }
  ];

// useState

  const [OpenmyDomains,setOpenmyDomains]=useState(false);
  const [state,setState]=useState(false);

  
// constructor(props){
//     super(props);
//     this.state={
//       isToggleOn:false    
//     }
//     this.handleClick=this.handleClick.bind(this);
//   }

//   function handleClick(){
//     this.setState(state=>({
//       isToggleOn:!state.isToggleOn
//     }))
//   }

const toggle=()=>{
  setState(!state)
}

 

  return ( 
<div className="Domains" >
<div className="Card">
 {DomainsData.map((dom)=>(

  <div className="Card-content">
    <h2>{dom.name}</h2>
    <h5>{dom.buy}</h5>
    <p>{dom.oldbuy}</p>
    <button className="Domainsbutton">{dom.button}</button>
 </div>


 ))}

</div>



<div className='TogglePossible'>
        <div className="divi">
        <p className="paragraf-domain">Why park a domain name in Parkname?</p>
        <div className="space"></div>
        <button onClick={toggle}  className="buttonToggle">{state?<FontAwesomeIcon onClick={()=>setOpenmyDomains(!OpenmyDomains)}   className="icone" icon={faAngleUp}/>:<FontAwesomeIcon onClick={()=>setOpenmyDomains(!OpenmyDomains)}   className="icone" icon={faAngleDown}/>}</button>
        </div>
     {OpenmyDomains && <Paragraf/>  } 
     </div>



</div>

   );
}
 
export default Domains;