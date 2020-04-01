import { useState, useEffect } from 'react';
import news from '../api/news';

export default (storyName, variablesArray) => {
	const [storiesIds, setStoriesIds] = useState([]);

	useEffect(() => {
		const getStoriesIds = async () => {
			// Getting top stories
			try {
				const response = await news.get(`/${storyName}.json`);
				setStoriesIds(response.data);
			} catch (err) {
				console.log(`Error: ${err}`);
			}
		};

		getStoriesIds();
	}, [...variablesArray]);

	return [storiesIds];
};
