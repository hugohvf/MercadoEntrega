import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import styles from "../styles";
import api from "../services/api";
import { AntDesign } from '@expo/vector-icons';

const List = ({navigation, dispatch, orders}) => {
    const [refreshing, setRefresh] = useState(true);

    async function loadOrders() {
        setRefresh(true)
        response = await api.get('/order').then(setRefresh(false))
        dispatch({type: "GET_ORDERS", value: response.data.filter(item => item.done==false)})
        dispatch({type: "GET_ORDERS_DONE", value: response.data.filter(item => item.done==true)})
    }

    useEffect(() => {
        
        loadOrders()
    }, []);

    

    const renderItem = ({item, index}) => {
        return (
                <View style={styles.card}>
                    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('ClientOrder', {index, nome: item.end.nome, type: "undone"})}>
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
            {refreshing?<ActivityIndicator style={{position: "absolute", top: "50%", left: "50%"}} color='#bfff2c' size="large" >
            </ActivityIndicator>:<FlatList
                style={styles.flatList}
                contentContainerStyle={styles.list}
                data={orders}
                keyExtractor={item => item._id.toString()}
                renderItem={renderItem}
                enableSnap={true}
                refreshing={refreshing}
                onRefresh={() => loadOrders()}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>}
                />}
            <TouchableOpacity style={styles.donesButton} onPress={() => navigation.navigate('Dones')}>
                    <Text style={styles.donesText}>Concluídos</Text>
            </TouchableOpacity>
        </View>
    );
}

export default connect(state => ({orders: state.orders}))(List);