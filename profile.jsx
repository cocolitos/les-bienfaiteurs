import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image, Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 250,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(props.route.params.data),
    };
  }

  render() {
    return (
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200',
          }}
        />
        <Button
          title="Aller voir la liste"
          onPress={() => this.props.navigation.navigate('Liste')}
        />
        <Button
          title="Prendre une photo"
          onPress={() => this.props.navigation.navigate('Photomatique')}
        />
        <Text>Login:</Text>
        <Text>{this.state.data.username}</Text>
        <Text>Mail:</Text>
        <Text>{this.state.data.email}</Text>
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
