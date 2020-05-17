import React, { Component } from "react";
import logo from './logo.png';

class Header extends Component {
	render(){
		return(
			<div className="text-center">
				<img
			   		src={logo}
			   		width="100"
			   		className="img-thumbnail"
			   		style={{ marginTop: "20px"}}
				/>
				<hr />
				<h5>
			   	<i>presents</i>
				</h5>
				<h1> KODIAC: App with React + Django </h1>
			</div>
		);
	}
}

export default Header;
