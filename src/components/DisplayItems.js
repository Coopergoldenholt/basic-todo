import React, { Component } from "react";

export default class DisplayItems extends Component {
	render() {
		const { ele, index } = this.props;
		return (
			<div>
				<h2 key={index}>{ele.text}</h2>
			</div>
		);
	}
}
