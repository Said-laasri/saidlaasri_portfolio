import React from "react";
import icon from '../../assets/download_for_offline_FILL0_wght400_GRAD0_opsz48.svg';
import classes from './Arrowdown.module.css';

const Arrowdown = () => {
  return (
    <div>
    <img src={icon} alt="icon"  className={classes.icon}/>
    </div>
  );
};

export default Arrowdown;
