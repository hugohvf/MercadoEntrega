import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {View} from 'react-native';
import React from 'react';
import Orders from './pages/orders';
import ClientOrder from './pages/clientOrder';
import LoadingScreen from './pages/loadingScreen';


const RootStack = createStackNavigator({
    LoadingScreen: {
        screen: LoadingScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Orders: {
        screen: Orders,
        navigationOptions: {
            title: "Pedidos:",
            headerLeft: () => <View></View>
        },
    ClientOrder: {
        screen: ClientOrder,
        navigationOptions: {

        },
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#282828',
        },
        headerTintColor: '#f2f2f2',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'gotham-black',
          },
    }
}
);


const Routes = createAppContainer(RootStack);
export default Routes;