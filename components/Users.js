import React, { Component } from 'react';
import { getAllUsers } from '../queries/queries';
import { graphql } from 'react-apollo';
import {
  View,
  FlatList,
  Text,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class Users extends Component {
  // state = {
  //   selected: null
  // };

  displayUsers = () => {
    const data = this.props.data;
    if (data.loading) {
      return <Text> loading please wait ...</Text>;
    } else {
      return (
        <TouchableOpacity>
          {this.props.data.allUsers.map((user, index) => (
            <Text key={index} style={styles.item}>
              {user.names}
            </Text>
          ))}
        </TouchableOpacity>
      );
    }
  };

  render() {
    return <View style={styles.container}>{this.displayUsers()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5fffa'
  },
  item: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default graphql(getAllUsers)(Users);
