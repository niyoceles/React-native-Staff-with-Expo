import React, { Component } from 'react';
import { getAllUsers } from '../queries/queries';
import { graphql } from 'react-apollo';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from 'native-base';

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
        <View>
          {this.props.data.allUsers.map((u, i) => {
            return (
              <View key={i}>
                <CardItem style={styles.item}>
                  <Image
                    source={{
                      uri:
                        'https://res.cloudinary.com/dfsai53mw/image/upload/v1579784519/qgohukxg4ikggnaecksa.jpg'
                    }}
                    style={{
                      height: 50,
                      width: 50,
                      marginRight: 5,
                      borderRadius: 40
                    }}
                  />
                  <Text style={styles.name}>
                    {u.names} {'\n'}
                    <Text style={styles.email}>{u.email}</Text>
                  </Text>
                </CardItem>
              </View>
            );
          })}
        </View>
      );
    }
  };

  render() {
    return (
      <Container>
        <Header title='Users' />
        <Content>
          <Card style={{ flex: 0 }}>{this.displayUsers()}</Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   backgroundColor: '#f5ff',
  //   marginLeft: 8
  // },
  name: {
    fontSize: 14
  },
  email: {
    fontSize: 11
  },
  item: {
    backgroundColor: '#d6d7da',
    textAlign: 'center',
    margin: 5
  }
});

export default graphql(getAllUsers)(Users);
