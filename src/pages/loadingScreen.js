import React from 'react';
import { View, ActivityIndicator} from "react-native";
import * as Font from 'expo-font';
import styles from "../styles";


export default class LoadingScreeen extends React.Component {
    async componentDidMount() {
        await Font.loadAsync({
            'gotham-black': require('../assets/fonts/Gotham-Black.ttf'),
            'gotham-light': require('../assets/fonts/3.Gotham-Light.otf'),
        });

        this.props.navigation.replace('Orders');
    }

    render() {
        return (
            <View style={{...styles.container2, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color='#fff'></ActivityIndicator>
            </View>
        );
    }
    
}
