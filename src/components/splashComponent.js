import React, { Component } from 'react';
import { View, Image, Animated, Text } from 'react-native';

class SplashComponent extends Component {
	componentWillMount() {
		this.initialPositionLogo = new Animated.ValueXY(0, 0);
		this.initialPositionText = new Animated.ValueXY(0, 500);
		this.logoOpacity = new Animated.Value(0);
		this.tagLineOpacity = new Animated.Value(0);
		Animated.sequence([
			Animated.parallel([
				Animated.timing(this.logoOpacity, {
					toValue: 1,
					duration: 1000
				}),
				Animated.timing(this.initialPositionLogo, {
					toValue: {
						x: 0,
						y: 300
					},
					duration: 1000
				}),
				Animated.timing(this.initialPositionText, {
					toValue: {
						x: 0,
						y: -270
					},
					duration: 1000
				})
			]),
			Animated.timing(this.tagLineOpacity, {
				toValue: 1,
				duration: 1000
			})
		]).start(() => {
			//end of navigation.... redirect to login page
			//this.props.navigation.navigate('Login');
		});
	}

	render() {
		return (
			<View style={{ flexDirection: 'column' }}>
				<Animated.View style={this.initialPositionLogo.getLayout()}>
					<Animated.Image
						style={{ opacity: this.logoOpacity, left: 62 }}
						source={require('../assets/top.png')}
					/>
				</Animated.View>

				<Animated.View style={this.initialPositionText.getLayout()}>
					<Animated.Image
						style={{ opacity: this.logoOpacity, top: 500 }}
						source={require('../assets/bottom.png')}
					/>
				</Animated.View>
				<Animated.Text style={{ opacity: this.tagLineOpacity, top: 268, left: 55, fontSize: 20 }}>
					Ready To Help
				</Animated.Text>
			</View>
		);
	}
}
export default SplashComponent;
