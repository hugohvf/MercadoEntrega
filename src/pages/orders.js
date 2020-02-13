import React, { useEffect, useState } from 'react';

import { View, Text, FlatList, TouchableOpacity, Card} from 'react-native';
import styles from "../styles";
import api from "../services/api";
import { AntDesign } from '@expo/vector-icons';

const List = ({navigation, dispatch, lista}) => {
    let nextItem = React.createRef();

    const renderItem = ({item, index}) => {
        return (
            <View>

            </View>
        );
    };

    return (
        <KeyboardAvoidingView style={styles.backgroundContainer} behavior={Platform.OS === "ios" ? "padding" : "padding"} >
                <FlatList
                style={styles.flatlist}
                contentContainerStyle={styles.list}
                data={lista}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                enableSnap={true}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>}
                />
            <View >
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Delivery')} >
                    <Text style={styles.buttonText} >Feito !</Text>
                </TouchableOpacity>
            </View>   
        </KeyboardAvoidingView>
    );
}

export default connect(state => ({lista: state.lista}))(List);