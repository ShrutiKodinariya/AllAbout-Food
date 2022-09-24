<<<<<<< HEAD
import React from "react";
import "./Popup.css";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsFillClockFill } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
=======
import React from 'react';
import './Popup.css';
import { RiCloseCircleFill } from 'react-icons/ri';
import { BsFillClockFill } from 'react-icons/bs';
import { GiForkKnifeSpoon } from 'react-icons/gi';


function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
>>>>>>> acad08f4703c5243e4949011c646f3725f66b566
        <div className="recipe_timings">
          <BsFillClockFill className="clock_icon"></BsFillClockFill>
          <p className="prepTime">
            Prep in <p>{props.ptime}</p>
          </p>
          <p className="cookTime">
            Cooks in <p>{props.ctime}</p>
          </p>
          <p className="totalTime">
            Total in <p>{props.ttime}</p>
          </p>
          <GiForkKnifeSpoon className="serving_icon"></GiForkKnifeSpoon>
          <p className="serving">
            Makes: <p>{props.serve}</p>
          </p>
        </div>
<<<<<<< HEAD
        <div className="full_recipe">
          <div className="ingredients">
            <p className="ing">Ingredients:</p>
            <ul className="content">
              <li>{props.ing}</li>
            </ul>
          </div>
          <div className="how_to_make">
            <p className="htm">{props.htm}</p>
            <p className="make">{props.make1}</p>
            <p className="make">{props.make2}</p>
            <p className="make">{props.make3}</p>
            <p className="make">{props.make4}</p>
            <p className="make">{props.make5}</p>
          </div>
        </div>
        <RiCloseCircleFill
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        >
=======
        <div className='full_recipe'>
          <div className='ingredients'>
            <p className='ing'>
              Ingredients:
            </p>
            <ul className='content'><li>{props.ing}</li></ul>
          </div>
          <div className='how_to_make'>
            <p className='htm'>
              {props.htm}
            </p>
            <p className='make'>
              {props.make1}
            </p>
            <p className='make'>
              {props.make2}
            </p>
            <p className='make'>
              {props.make3}
            </p>
            <p className='make'>
              {props.make4}
            </p>
            <p className='make'>
              {props.make5}
            </p>
          </div>
        </div>
        <RiCloseCircleFill className='close-btn' onClick={() => props.setTrigger(false)}>
>>>>>>> acad08f4703c5243e4949011c646f3725f66b566
          Close
        </RiCloseCircleFill>
        {props.children}
      </div>
    </div>
<<<<<<< HEAD
  ) : (
    ""
  );
}

export default Popup;
=======
  ) : "";
}

export default Popup
>>>>>>> acad08f4703c5243e4949011c646f3725f66b566
