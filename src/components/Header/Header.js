import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti'

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header ({ name }) {
    return (
        <View style={styles.container}>
            <MotiView 
                style={styles.content}
                from={{
                    translateY: -150,
                    opacity: 0,

                }}
                animate={{
                    translateY: 0,
                    opacity: 1,
                }}
                transition={{
                    type: "timing",
                    duration: 800,
                    delay: 300,
                }}
                >
                <MotiText 
                    style={styles.username}
                    from= {{
                        translateX: -300,
                    }}
                    animate= {{
                        translateX: 0,
                    }}
                    transition={{
                        type: "timing",
                        duration: 800,
                        delay: 800,
                    }}
                    > Olá, {name} </MotiText>

                <TouchableOpacity activeOpacity={0.7} style={styles.buttonUser}>
                <MaterialCommunityIcons name="ninja" size={36} color="black" />
                </TouchableOpacity>
            </MotiView>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4850DB',
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 40,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(38, 44, 51, 0.3)',
        alignItems: 'center',
        paddingTop: 4,
        borderRadius: 44/2,
    }
})