
/* class Header extends React.Component {
     render () {
     }
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>{ props.title }</Text>
    </View>
);

// StyleSheet
const style = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#afc7cc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
    }
})




export default Header; 