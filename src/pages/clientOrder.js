import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, Card, KeyboardAvoidingView, ScrollView} from 'react-native';
import styles from "../styles";
import api from "../services/api";
import { MaterialIcons } from '@expo/vector-icons';

const Order = ({navigation, dispatch, orders, ordersDone}) => {
    var i = navigation.state.params.index;
    var type = navigation.state.params.type;
    
    const [lista, setLista] = useState(orders[i].lista);
    const [pedido, setPedido] = useState(orders[i]);

    useEffect(() => {
        if(type==="done") {
            setLista(ordersDone[i].lista)
            setPedido(ordersDone[i])
        } else {
            setLista(orders[i].lista)
            setPedido(orders[i])
        }
    }, [])

    function handleCheckbox (index, item) {
        item.checked = !lista[index].checked;
        const l = lista;
        l[index] = item;
        setLista(l);
        if(type==="undone"){
        dispatch({type: "SET_CHECKED", orderi: i, listai: index, lista: l})
        } else {
        dispatch({type: "SET_CHECKED_DONE", orderi: i, listai: index, lista: l})
        }
    }

    async function sendDoneOrder (ord) {
        // console.log(ord)
        // let res = await api.put(`/order?id=${ord._id}`, {done: true})
        // dispatch({type: "SET_DONE", pedido, i, status: type})
        // console.log(res)
    }

    return (
        <View style={styles.backgroundContainer} >
            <ScrollView>
                    <View style={styles.orderContainer}>
                        <Text style={styles.bottomText}>Numero de items:  <Text style={styles.numberText}>{lista.length}</Text> </Text>
                        <Text style={styles.bottomText}>Pedido às <Text style={styles.timeText}>{pedido.data.substr(11, 5)}</Text> do dia <Text style={styles.dateText}>{orders[i].data.substr(8, 2)}/{orders[i].data.substr(5, 2)}/{orders[i].data.substr(2, 2)}</Text></Text>
                        <Text style={styles.bottomText}>Entregar até dia <Text style={styles.dateText}>{pedido.dataEntrega}</Text></Text>
                        <Text style={styles.bottomText}>{pedido.end.logradouro}, {pedido.end.num}</Text>
                        <Text style={styles.bottomText}>{pedido.end.comp}</Text>
                        <Text style={styles.bottomText}>{pedido.end.cidade}-{pedido.end.UF}  {pedido.end.cep}</Text>
                        <Text style={styles.bottomText}>Número de telefone: {pedido.end.tel}</Text>
                        <TouchableOpacity  style={styles.button}>
                            <Text  style={styles.buttonText}>Entregar!</Text>
                        </TouchableOpacity>
                    </View>
            {lista.map((item,index) => {
                return (<View key={index} style={styles.itemContainer}>
                    <TouchableOpacity onPress={()=> handleCheckbox(index, item)} style={{marginRight: 10}}>
                        {lista[index].checked==false?<MaterialIcons name={"check-box-outline-blank"} size={35}/>:<MaterialIcons name={"check-box"} size={35}/>}
                    </TouchableOpacity>
                    <Text style={styles.itemQtd}>{item.qtd}</Text>
                    <Text style={styles.itemText}>{item.desc}</Text>
                </View>)
            })}
            {!pedido.done?
                    <TouchableOpacity style={styles.button2} onPress={() => sendDoneOrder(orders[i])}>

                            <Text  style={styles.buttonText}>Finalizar!</Text>

                    </TouchableOpacity>:<View></View>}
            </ScrollView>
        </View>     
    );
}

Order.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.nome,
});

export default connect(state => ({orders: state.orders, ordersDone: state.ordersDone}))(Order);