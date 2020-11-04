import React from 'react';
import { View, Text } from 'react-native';

const PeopleList = props => {
    const { peoples } = props;
    const textElements = peoples.map(people => {
        const { first } = people.name;
        return <Text key={people.name.first}>{first}</Text>
    });

    return (
        <View>
            <text>Este é o componete Contatos</text>
        </View>
    )
};

export default PeopleList;
