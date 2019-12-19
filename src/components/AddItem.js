import React, { Component } from "react";

export default class AddItem extends Component {
	constructor() {
		super();
		this.state = {
			input: ""
		};
	}
	handleChange(e) {
		this.setState({
			input: e
		});
	}

	handleAdd() {
		const { input } = this.state;
		this.props.addItemFn({
			input
		});
	}
	render() {
		const { addItemFn } = this.props;
		return (
			<div>
				<input onChange={e => this.handleChange(e.target.value)} />
				<button onClick={() => this.handleAdd()}>ADD ITEM</button>
			</div>
		);
	}
}
