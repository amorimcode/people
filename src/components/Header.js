
/* class Header extends React.Component {
     render () {
     }
 */
import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const containerStyle = {
   marginTop: 30,
   backgroundColor: '#afc7cc',
    // [propriedades CSS] : [Valor]
};

const Header  = (props) => (
    <View style={containerStyle}>
        <Text>Contatos</Text>
    </View>
);  

export default Header; 