import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashComponent from './src/components/splashComponent';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<SplashComponent />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e6ffff',
		alignItems: 'center',
		justifyContent: 'flex-start'
	}
});
