import React,{ Component }from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
	}
	state={term:''};
	handleOnChange = (event) => {
		this.setState({term : event.target.value});
		console.log(this.state.term);
	}
	render(){
		return (
			<div className="Block">
			<input className="search"
			value={this.state.term}
			onChange={this.handleOnChange} />
			</div>
			);
	}


}
export default SearchBar;
