import React from 'react'
import {View, StyleSheet} from 'react-native'
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from 'expo-constants'
import colors from '../config/colors'
import Text from './AppText'

const OfflineNotice = () => {
    const netInfo = useNetInfo()
    
    if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false){
        return (
            <View style={style.container}>
                <Text style={style.text}>
                    No Internet Connection
                </Text>
            </View>
        )
    }
    return null
}

const style = StyleSheet.create({
    container : {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        height: 40,
        marginTop: Constants.statusBarHeight,
        // position: 'absolute',
        // top: Constants.statusBarHeight,
        width: '100%',
        zIndex: 10000
    },
    text: {
        color: colors.white
    }
})

export default OfflineNotice 