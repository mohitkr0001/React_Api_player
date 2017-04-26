import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/Search_bar';
import Videolist from './components/component3';
import VideoDetail from './components/component1';

const API_KEY='';



class App extends React.Component {
	constructor(props){
		super(props);

		this.state={
			videos:[],
			SelectVideo:null
			 };

		YTSearch({key:API_KEY,term:'react.js'},(videos) => {
		this.setState({ 
			videos:videos, 
			SelectVideo:videos[0]
		});
		});
	}
	render(){
		return (
		<div>  
			<SearchBar />
			<VideoDetail video={this.state.SelectVideo}/>
			<Videolist 
			onVideoSelect={SelectVideo => this.setState({SelectVideo})}
			videos={this.state.videos} />
		</div>
		);
	}
}

ReactDOM.render(<App />,document.querySelector('.container'));
