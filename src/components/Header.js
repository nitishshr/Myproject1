import React from 'react';
import search from './search.png';
import laptop from './laptop.jpeg';
import './Header.css';

const Header=()=>{
	return(
			<div>
		        <div className="navbar">
		          <div className="flexsearchtop">
		            <h3>My Laptops</h3>
		            <input type="text" id="search" placeholder="Search anything"></input>
		            <div id="hovereffect"></div>
		            <button type="submit" className="search"><img id="searchimg" src={search} alt="Search"/></button>
		          </div>
		          <div>
		            <ul className="navbarul">
		              <img id="brand" src={laptop} alt="Laptops Site" width="80px" height="70px"/>
		              <li id="mainmenu"><span style= {{fontSize: '0.65em'}} >Shop by </span>
		               options <span style={{width:'3px',height:'3px',display:'inline-block',
		               border:'solid white',borderWidth:'0px 3px 3px 0px',transform:'rotate(45deg)'}}>
		               </span></li>
		              <div className="navbarli">
		                <li className="distance">Link1</li>
		                <li className="distance">Link2</li>
		                <li className="distance">Link3</li>
		                <li className="distance">Link4</li>
		              </div>
		             <li className="push">Link5</li>
		             
		            </ul>
		          </div>
		        </div>


      		</div>


	);
}

export default Header;