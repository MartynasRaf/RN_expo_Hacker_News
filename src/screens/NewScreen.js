import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Tab from '../components/Tab';
import useHNApi from '../hooks/useHNApi';
import { FlatList } from 'react-native-gesture-handler';

const NewScreen = ({ navigation }) => {
	const [storiesIds] = useHNApi('newstories', [], 100);

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
					renderItem={item => (
						<Tab id={item} navigation={navigation} />
					)}
				/>
			) : null}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default NewScreen;
