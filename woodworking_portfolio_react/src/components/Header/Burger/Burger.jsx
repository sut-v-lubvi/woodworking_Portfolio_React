
import s from './Burger.module.css';
import React, { useEffect, useState } from "react";

function Burger(props) {
  // const [nav, setNav] = useState(false);
  return (
					<div onClick={() => props.setNav(!props.nav)} className = {props.nav ? [s.menu_btn, s.active].join(' ') : [s.menu_btn] }>
						<span></span>
						<span></span>
						<span></span>
					</div>
  );
}

export default Burger;
