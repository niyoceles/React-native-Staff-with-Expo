import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Users from '../components/Users';
import MainExpense from './MainExpense';
class HomeScreen extends React.Component {
  async componentDidMount() {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.props.navigation.navigate('Home');
    } else {
      this.props.navigation.navigate('Welcome');
    }
  }

  clearAuthentication = () => {
    AsyncStorage.removeItem('fb_token');
    this.props.navigation.navigate('Welcome');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button onPress={this.clearAuthentication} title='Log out'></Button>
      </View>
    );
  }
}
class UserScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>User Screen</Text>
        <Users />
      </View>
    );
  }
}
class ImageScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Image Screen</Text>
        <MainExpense />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>
        )
      }
    },
    Users: {
      screen: UserScreen,
      navigationOptions: {
        tabBarLabel: 'Users',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'ios-person'}
            />
          </View>
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#f69b31' }
      }
    },
    Image: {
      screen: ImageScreen,
      navigationOptions: {
        tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'ios-images'}
            />
          </View>
        ),
        activeColor: '#615af6',
        inactiveColor: '#46f6d7',
        barStyle: { backgroundColor: '#67baf6' }
      }
    }
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#3BAD87' }
  }
);

// const MainNavigator = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Auth: { screen: HomeScreen }
// });

export default createAppContainer(TabNavigator);
