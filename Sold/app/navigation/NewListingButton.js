import React from 'react';
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function NewListingButton({onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name='plus-circle' color={colors.white} size={35} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        bottom: 15,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
        height: 80,
        justifyContent: 'center',
        width: 80
    }
})

