import React from 'react';
import {
	ScrollView,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Linking } from 'expo';
import Comment from '../components/Comment';

const TabScreen = ({ navigation }) => {
	const story = navigation.getParam('story');
	if (story.text !== undefined) {
		console.log(story);
	}

	return (
		<ScrollView>
			<Comment text={story.text !== undefined ? story.text : ''} />
		</ScrollView>
	);
};

TabScreen.navigationOptions = ({ navigation }) => {
	return {
		cardStyle: { backgroundColor: '#f5d2a4' },
		headerTitle: () => (
			<Text
				adjustsFontSizeToFit
				numberOfLines={2}
				style={styles.headerTitle}
			>
				{navigation.getParam('story').title}
			</Text>
		),
		headerRight: () => (
			<TouchableOpacity
				onPress={() =>
					Linking.openURL(navigation.getParam('story').url)
				}
				style={styles.headerLink}
			>
				<EvilIcons
					name='external-link'
					size={52}
					color='#dbdbdb'
					style={styles.image}
				/>
			</TouchableOpacity>
		),
		headerStyle: {
			backgroundColor: '#ff6700'
		}
	};
};

const styles = StyleSheet.create({
	headerTitle: {
		width: Dimensions.get('window').width / 1.4,
		marginLeft: -10,
		color: 'white'
	},
	headerLink: {
		backgroundColor: '#ff672f',
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center'
	}
});

export default TabScreen;
