import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import news from '../api/news';

const Tab = ({ id, navigation }) => {
	const [story, setStory] = useState(null);

	useEffect(() => {
		const getStory = async () => {
			try {
				const response = await news.get(`/item/${id.item}.json`);
				setStory(response.data);
			} catch (err) {
				console.log(`Error: ${err}`);
			}
		};

		getStory();
	}, []);

	return (
		<View style={styles.emptyContainer}>
			{story !== null ? (
				<View style={styles.container}>
					<TouchableOpacity>
						<View style={styles.textContainer}>
							<Text
								style={
									story.title.length <= 23
										? [styles.header, styles.oneLineText]
										: styles.header
								}
								numberOfLines={2}
							>
								{story.title}
							</Text>
							<Text style={styles.info}>
								{story.score} points by {story.by} 1 day ago |
								{story.descendants} comments
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<EvilIcons
							name='external-link'
							size={62}
							color='#858585'
							style={styles.image}
						/>
					</TouchableOpacity>
				</View>
			) : (
				<View style={styles.emptyContainer}></View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	emptyContainer: {
		height: 80,
		borderBottomWidth: 1,
		borderBottomStartRadius: 10,
		borderBottomEndRadius: 10,
		borderBottomColor: 'grey'
	},
	container: {
		flexDirection: 'row'
	},
	oneLineText: {
		marginTop: 13
	},
	textContainer: {
		width: 350
	},
	header: {
		fontSize: 20,
		paddingLeft: 15,
		fontWeight: 'bold',
		width: 320
	},
	info: {
		fontSize: 12,
		paddingLeft: 15,
		color: '#858585',
		fontWeight: '500'
	},
	image: {
		marginTop: 10,
		marginLeft: -15
	}
});

export default Tab;
