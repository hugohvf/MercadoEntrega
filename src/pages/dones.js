import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import styles from "../styles";
import api from "../services/api";
import { AntDesign } from '@expo/vector-icons';

const Dones = ({navigation, dispatch, ordersDone}) => {

    

    const renderItem = ({item, index}) => {
        return (
                <View style={styles.card}>
                    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('ClientOrder', {index, nome: item.end.nome, type: "done"})}>
                    <View style={styles.topContainer}>
                        <Text style={styles.topText}>{item.end.nome}</Text>
                    </View>

                    <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>Numero de items:  <Text style={styles.numberText}>{item.lista.length}</Text> </Text>
                    <Text style={styles.bottomText}>Pedido às <Text style={styles.timeText}>{item.data.substr(11, 5)}</Text> do dia <Text style={styles.dateText}>{item.data.substr(8, 2)}/{item.data.substr(5, 2)}/{item.data.substr(2, 2)}</Text></Text>
                    <Text style={styles.bottomText}>Entregar até dia <Text style={styles.dateText}>{item.dataEntrega}</Text>
                    </Text>
                    </View>

                    </TouchableOpacity>
                </View>
        );
    };

    return (
        <View style={styles.backgroundContainer} >
            <FlatList
                style={styles.flatList}
                contentContainerStyle={styles.list}
                data={ordersDone}
                keyExtractor={item => item._id.toString()}
                renderItem={renderItem}
                enableSnap={true}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>}
                />
        </View>
    );
}

export default connect(state => ({ordersDone: state.ordersDone}))(Dones);