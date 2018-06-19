import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import facade from '../auth/loginFacade';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [],
                       error: "" 
                    }
    }

    logout = () => {
        facade.logout()
        this.props.navigation.navigate('Splash');
    }

    async componentDidMount() {
        // if(Number(res.status) >= 400) {
        //     this.setState({
        //         error: res.message
        //     });
        // }
        // else 
        //     this.setState({ data: res });
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Button style={styles.buttton} onPress={() => this.logout()} title="Logout test button" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#57606f',
        justifyContent: 'center',
    },
    button : {
        flex : 1,
        
        
    }

})