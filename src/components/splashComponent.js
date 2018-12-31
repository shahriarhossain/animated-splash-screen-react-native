import React, { Component } from 'react';
import { View, Image, Animated } from 'react-native';

class SplashComponent extends Component {
	componentWillMount() {
		this.initialPositionLogo = new Animated.ValueXY(0, 0);
		this.initialPositionText = new Animated.ValueXY(0, 500);
		this.logoOpacity = new Animated.Value(0);

		Animated.parallel([
			Animated.timing(this.logoOpacity, {
				toValue: 1,
				duration: 5000
			}),
			Animated.timing(this.initialPositionLogo, {
				toValue: {
					x: 0,
					y: 300
				},
				duration: 2000
			}),
			Animated.timing(this.initialPositionText, {
				toValue: {
					x: 0,
					y: -270
				},
				duration: 2000
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
			</View>
		);
	}
}
export default SplashComponent;
