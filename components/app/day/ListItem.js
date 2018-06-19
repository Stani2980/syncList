import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Swipeable from 'react-native-swipeable';

//TODO: add functionality to rendered buttons.

const leftContent = <Text> Delete </Text>;

const rightButtons = [
    <TouchableHighlight ><Text>Edit</Text></TouchableHighlight>,
    <TouchableHighlight><Text>Check</Text></TouchableHighlight>
];

function MyListItem() {
    return (
        <Swipeable style={styles.swipeableWhole} leftContent={leftContent} rightButtons={rightButtons}>
            <Text>My swipeable content</Text>
        </Swipeable>
    );
}

export default class ListItem extends Component {
    render() {
        return (
            <View>
                <MyListItem />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    swipeableWhole : {
        height : 40,
        backgroundColor : "blue",
    }
});