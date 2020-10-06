
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default class App extends React.Component {

  renderList() {
    const names = [
      'Bruno Amorim',
      'Deleo',
      'Slash',
    ];

    // return <Text> Estamos no caminho</Text> 

    const textElements = names.map(name => {
      return <Text key={name}>{name}</Text>;

    });
    return textElements;

  }

  render() {
    return (
      <View>
        <Header title="Contatos" />
        { this.renderList()}
        <Header title="Reutilizando Header" />
      </View>
    );
  }
}