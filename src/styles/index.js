import {StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({

    containerLoadingScreen: {
        flex: 1,
        justifyContent: 'space-around',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#282828',
        alignItems: "center",
    },
    flatList: {
        flex: 1,
    },
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    separator: {
        height: 5,
    },
    list: {
        alignItems: "center",
    },
    card: {
        elevation: 5,
        width: 0.9*Dimensions.get('window').width,
        margin: 10,
        backgroundColor: '#282828',
        borderColor: '#bfff2c',
        borderWidth: 1.5,
        borderRadius: 20,
    },
    bottomText: {
        color: '#fff',
        fontFamily: 'gotham-light',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
    },
    topText: {
        color: '#282828',
        fontFamily: 'gotham-black',
        fontSize: 20,
    },
    numberText:{
        fontSize: 25,
        color: '#bfff2c',
        fontFamily: 'gotham-black',
    },
    dateText: {
        color: '#bfff2c',
        textDecorationLine: 'underline',
        fontSize: 20,
    },
    timeText: {
        color: '#bfff2c',
        fontSize: 20,
    },
    topContainer: {
        height: 40,
        backgroundColor: '#bfff2c',
        padding: 5,
        alignItems: 'center'
    },
    bottomContainer: {
        alignItems: 'center',
        padding: 10,
        
    },
    orderContainer: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#282828',
    },
    botao: {
        flex: 1
    },
    button: {
        marginTop: 12,
        borderRadius: 20,
        height: 40,
        width: 140,
        backgroundColor: '#bfff2c',
        alignItems: "center",
        justifyContent: 'center',
    },
    button2: {
        alignSelf: "center",
        marginTop: 12,
        borderRadius: 20,
        height: 40,
        width: 140,
        backgroundColor: '#bfff2c',
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 25,
    },
    buttonText: {
        color: '#25291a',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 25,
        fontStyle: "italic",
        fontFamily: 'gotham-black',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        padding: 4,
        alignItems: 'center',
    },
    itemText: {
        fontFamily: 'gotham-light',
        fontSize: 19,
    },
    itemQtd: {
        fontFamily: 'gotham-black',
        fontSize: 25,
        marginRight: 10,
    },
    donesButton: {
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 10, 
        justifyContent: 'center', 
        alignItems: 'center',
        
    },
    donesText: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
        borderRadius: 50,
        width: 150,
        height: 34,
        backgroundColor: '#bfff2c',
        fontFamily: 'gotham-black',
        fontSize: 24,
        textAlign: "center",
        
    }
});

export default styles;