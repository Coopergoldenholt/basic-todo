import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import AddItem from "./components/AddItem";
import DisplayItems from "./components/DisplayItems";

class App extends Component {
	constructor() {
		super();
		this.state = {
			list: []
		};
		this.addItem = this.addItem.bind(this);
	}
	componentDidMount() {
		axios.get("/api/todo").then(res => {
			console.log(res.data);
			this.setState({
				list: res.data
			});
		});
	}
	addItem(text) {
		axios.post("/api/todo", { text: text.input }).then(res => {
			console.log(res.data);
			this.setState({
				list: res.data
			});
		});
	}

	render() {
		let newList = this.state.list.map((ele, index) => {
			return <DisplayItems index={index} ele={ele} />;
		});
		return (
			<div className="App">
				<h1>Andrew's Super Fun Todo List!</h1>
				<AddItem addItemFn={this.addItem} />

				{newList}
			</div>
		);
	}
}

export default App;
