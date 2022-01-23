import React from 'react'
import {View, StyleSheet, Modal} from 'react-native'
import * as Progress from "react-native-progress"
import LottieView from "lottie-react-native";

import Text from '../components/AppText'
import colors from '../config/colors'

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
    return (
        <Modal visible={visible}>
            <View style={style.container}>
                {progress < 1 
                    ? 
                        <Progress.Bar 
                            color={colors.primary} 
                            progress={progress} 
                            width={200}
                        /> 
                    : 
                        <LottieView 
                            autoPlay 
                            loop={false} 
                            onAnimationFinish={onDone} 
                            source={require('../assets/animations/done.json')} 
                            style={style.animation}
                        />
                }
                
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    container : {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    animation: {
        width: 150
    }
})

export default UploadScreen 