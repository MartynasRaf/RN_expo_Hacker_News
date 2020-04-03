import React, { useEffect, useState, useRef } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Linking } from 'expo';
import news from '../api/news';

const Tab = ({ id, navigation }) => {
	const [story, setStory] = useState(null);

	const componentIsMounted = useRef(true);

	useEffect(() => {
		const getStory = async () => {
			try {
				if (componentIsMounted) {
					const response = await news.get(`/item/${id.item}.json`);
					setStory(response.data);
				}
			} catch (err) {
				console.log(`Error: ${err}`);
			}
		};

		getStory();

		return () => {
			componentIsMounted.current = false;
		};
	}, []);

	return (
		<View style={styles.emptyContainer}>
			{story !== null ? (
				<View style={styles.container}>
					<TouchableOpacity
						onPress={() => navigation.navigate('Tab', { story })}
					>
						<View style={styles.textContainer}>
							<Text style={styles.header} numberOfLines={2}>
								{story.title}
							</Text>
							<Text
								style={styles.info}
								adjustsFontSizeToFit
								numberOfLines={1}
							>
								{story.score} points by {story.by} {story.time} |{' '}
								{story.descendants} comments
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => Linking.openURL(story.url)}
					>
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
		borderBottomColor: 'grey',
		width: Dimensions.get('window').width
	},
	container: {
		flexDirection: 'row'
	},
	oneLineText: {
		marginTop: 13
	},
	textContainer: {
		width: Dimensions.get('window').width / 1.2,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		marginTop: 15
	},
	header: {
		fontSize: 20,
		paddingLeft: 15,
		fontWeight: 'bold',
		width: Dimensions.get('window').width / 1.2
	},
	info: {
		fontSize: 12,
		paddingLeft: 15,
		color: '#858585',
		fontWeight: '500',
		width: Dimensions.get('window').width / 1.2
	},
	image: {
		width: 62,
		marginTop: 10
	}
});

export default Tab;
