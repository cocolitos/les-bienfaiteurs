import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, LogBox, Button } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default class Connexion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: "",
			password: "",
			data: {}
		};
	}

	loginHandler = (event) => {
		axios.post('https://api-sgetas.herokuapp.com/auth/signin', {
			username: this.state.login,
			password: this.state.password
		})
		.then((response) => {
 			//this.setState({data: response.request._response});
 			this.props.navigation.navigate('Profile', {data: response.request._response});
 		}, (error) => {
  			this.setState({data: error.message});
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Login</Text>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
					onChangeText={text => this.setState({login:text})}
					value={this.state.login}
				/>
				<Text>Mot de passe</Text>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
					onChangeText={text => this.setState({password:text})}
					value={this.state.password}
				/>
				<Button
					onPress={this.loginHandler}
					title="Se connecter"
					color="#841548"
					accessibilityLabel="Se connecter"
				/>
				<Button
					title="S'inscrire"
					onPress={() =>
						this.props.navigation.navigate('inscription')
					}
				/>
				<Text>{JSON.stringify(this.state.data)}</Text>
			</View>
		);
	}
}

			/*
				<Button
					title="Add some friends"
					onPress={() =>
						//this.props.navigation.navigate('Friends')
					}
				/>
			*/