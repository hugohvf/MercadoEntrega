import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, Card, KeyboardAvoidingView, ScrollView} from 'react-native';
import styles from "../styles";
import api from "../services/api";
import { MaterialIcons } from '@expo/vector-icons';
import getDirections from 'react-native-google-maps-directions'

const Order = ({navigation, dispatch, orders, ordersDone, position}) => {
    var i = navigation.state.params.index;
    var type = navigation.state.params.type;
    const [click, setClick] = useState(false);
    [pedido, setPedido] = useState(navigation.state.params.pedido);
    [lista, setLista] = useState(navigation.state.params.pedido.lista);


    useEffect(() => {
        console.log(position);
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

    function openMaps() {
        const data = {
            source: {
             latitude: position.latitude,
             longitude: position.longitude
           },
           destination: {
             latitude: pedido.end.loc.latitudee,
             longitude: pedido.end.loc.longitude
           },
           params: [
             {
               key: "travelmode",
               value: "driving"        // may be "walking", "bicycling" or "transit" as well
             },
             {
               key: "dir_action",
               value: "navigate"       // this instantly initializes navigation using the given travel mode
             }
           ],
           waypoints: [
            {
                latitude: pedido.end.loc.latitude,
                longitude: pedido.end.loc.longitude
              },
           ]
         }
      
         getDirections(data)
    }

    async function sendDoneOrder (ord) {
        
        if(click===false){
        setClick(true)
        let res = await api.put(`/order?id=${ord._id}`, {done: true})
        dispatch({type: "SET_DONE", pedido, i, status: type}) // Log the order to be sure a filter will solve the problem

        navigation.goBack();
        } 
    }

    return (
        <View style={styles.backgroundContainer} >
            <ScrollView>
                    <View style={styles.orderContainer}>
                        <Text style={styles.bottomText}>Numero de items:  <Text style={styles.numberText}>{lista.length}</Text> </Text>
                        <Text style={styles.bottomText}>Pedido às <Text style={styles.timeText}>{pedido.data.substr(11, 5)}</Text> do dia <Text style={styles.dateText}>{pedido.data.substr(8, 2)}/{pedido.data.substr(5, 2)}/{pedido.data.substr(2, 2)}</Text></Text>
                        <Text style={styles.bottomText}>Entregar até dia <Text style={styles.dateText}>{pedido.dataEntrega}</Text></Text>
                        <Text style={styles.bottomText}>{pedido.end.logradouro}, {pedido.end.num}</Text>
                        <Text style={styles.bottomText}>{pedido.end.comp}</Text>
                        <Text style={styles.bottomText}>{pedido.end.cidade}-{pedido.end.UF}  {pedido.end.cep}</Text>
                        <Text style={styles.bottomText}>Número de telefone: {pedido.end.tel}</Text>
                        <TouchableOpacity  style={styles.button} onPress={() => openMaps()}>
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
            
                    <TouchableOpacity style={styles.button2} onPress={() => sendDoneOrder(pedido)} disabled={click}>

                            <Text  style={styles.buttonText}>{!pedido.done?"Finalizar!":"Recuperar"}</Text>

                    </TouchableOpacity>
            </ScrollView>
        </View>     
    );
}

Order.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.nome,
});

export default connect(state => ({orders: state.orders, ordersDone: state.ordersDone, position: state.position}))(Order);