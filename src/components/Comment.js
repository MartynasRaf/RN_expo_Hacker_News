import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HTMLView from 'react-native-htmlview';

const Comment = ({ text }) => {
	return (
		<View style={styles.commentContainer}>
			<HTMLView value={'<p>' + text + '</p>'} stylesheet={styles} />
			<View style={styles.info}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	p: {
		fontSize: 20
	},
	a: { color: 'blue' },
	commentContainer: {
		paddingHorizontal: 10,
		borderBottomWidth: 1
	},
	info: {
		height: 30,
		paddingHorizontal: 0,
		borderTopWidth: 1
	}
});

export default Comment;
