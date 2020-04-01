import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Tab from '../components/Tab';
import news from '../api/news';
import useHNApi from '../hooks/useHNApi';
import { FlatList } from 'react-native-gesture-handler';

const TopScreen = ({ navigation }) => {
	const [storiesIds] = useHNApi('topstories', []);

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			{storiesIds.length > 0 ? (
				<FlatList
					data={storiesIds}
					keyExtractor={item => item.toString()}
					initialNumToRender={10}
					windowSize={2}
					updateCellsBatchingPeriod={100}
					removeClippedSubviews
					renderItem={item => <Tab id={item} navigation={navigation} />}
				/>
			) : null}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default TopScreen;
