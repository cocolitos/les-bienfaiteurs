import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TextInput, LogBox, Button,
} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Connexion from './connexion';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      email: '',
      data: {},
    };
  }

	loginHandler = (event) => {
	  axios.post('https://api-sgetas.herokuapp.com/auth/signup', {
	    username: this.state.login,
	    email: this.state.email,
	    password: this.state.password,
	    roles: ['user', 'admin'],
	  })
	    .then((response) => {
 			this.setState({ data: response.data.message });
	    }, (error) => {
  			this.setState({ data: error.message });
	    });
	}

	render() {
	  return (
  <View style={styles.container}>
    <Text>Login</Text>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text) => this.setState({ login: text })}
      value={this.state.login}
    />
    <Text>Email</Text>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text) => this.setState({ email: text })}
      value={this.state.email}
    />
    <Text>Mot de passe</Text>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text) => this.setState({ password: text })}
      value={this.state.password}
    />
    <Button
      onPress={this.loginHandler}
      title="S'inscrire"
      color="#841548"
      accessibilityLabel="Se connecter"
    />
    <Text style={{ fontSize: 8 }}>{JSON.stringify(this.state.data)}</Text>
  </View>
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
			</View> */
