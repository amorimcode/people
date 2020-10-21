
import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: []
    };

  }

  componentDidMount() {

    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        });

      })
  }

  renderList() {
    // pessoas []
    const textElements = this.state.peoples.map(people => {
      const { first } = people.name;
      return <Text key={people.name.first}>{first}</Text>
    })
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