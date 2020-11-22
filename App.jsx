import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, LogBox, Button } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Connexion from './connexion';
import Inscription from './inscription';
import Profile from './profile';
import Liste from './liste';
import Photomatique from './Camera';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: "colin",
			password: "12345678",
			data: {x: 'cou'}
		};
	}

	loginHandler = (event) => {
		axios.post('https://api-sgetas.herokuapp.com/auth/signin', {
			username: this.state.login,
			password: this.state.password
		})
		.then((response) => {
 			this.setState({data: response.request._response});
		}, (error) => {
  		this.setState({data: error});
		});
	}

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="connexion"
						component={Connexion}
					/>
					<Stack.Screen
						name="inscription"
						component={Inscription}
					/>
					<Stack.Screen
						name="Profile"
						component={Profile}
					/>
					<Stack.Screen
						name="Liste"
						component={Liste}
					/>
					<Stack.Screen
						name="Photomatique"
						component={Photomatique}
					/>
				</Stack.Navigator>
			</NavigationContainer>	
		);
	}
}


/*
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
				<Text>{JSON.stringify(this.state.data)}</Text>
			</View>*/