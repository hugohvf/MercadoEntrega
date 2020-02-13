import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({

    containerLoadingScreen: {
        flex: 1,
        justifyContent: 'space-around',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#282828',
        alignItems: "center",

});

export default styles;