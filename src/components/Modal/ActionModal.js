import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


export function ActionModal({ handleClose, handleDelete, handleEdit }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{flex: 1, zIndex: 9}} onPress={handleClose}></TouchableOpacity>
            <View style={styles.content}>
                <TouchableOpacity style={styles.actionButton} activeOpacity={0.9} onPress={handleEdit}>

                    <Text style={styles.actionText}>Editar</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} activeOpacity={0.9} onPress={handleDelete}>

                    <Text style={[styles.actionText, styles.cancelText]}>Excluir</Text>

                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginVertical: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    actionButton: {
        zIndex: 99,
        backgroundColor: 'white',
        borderRadius: 6,
        marginTop: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
        shadowOpacity: 0.28,
        shadowRadius: 4,
    },
    actionText:{
        textAlign: 'center',
        fontWeight: 'bold',
    },
    cancelText:{
        color: '#FF0000',
    }
})