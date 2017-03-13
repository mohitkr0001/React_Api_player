import React from 'react';
import VideoListItem from './component2'

const Videolist = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
			onVideoSelect={props.onVideoSelect} 
			key={video.etag} 
			video={video} />  
			);
		
	});

	return (
		<ul className="col-md-4 list-group">
		{videoItems}
		</ul>
		);
};

export default Videolist;