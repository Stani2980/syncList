import React, { Component } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import ListItem from './ListItem';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //TODO: add onPress functionality to add item
    //TODO: Create list of ListItems as swipeables
    return (
      <View>
        <ListItem />
        <View>
          <TouchableOpacity>
            
            <Text>
              Add
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
