import { View, Text, StyleSheet, TouchableOpacity, Platform, Modal } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useState } from 'react'
import { ActionModal } from '../Modal/ActionModal';
import ModalEdit from '../Modal/ModalEdit';


export default function Lista({ data, onDelete, onUpdate }) {
    const [visibleModal, setVisibleModal] = useState(false);
    const [editedData, setEditedData] = useState(data);
    const [editModalVisible, setEditModalVisible] = useState(false);

    const handleSaveEdit = (editedData) => {

        const updatedList = [...Lista]
        const index = updatedList.findIndex(item => item.id === editedData.id);
        updatedList[index] = editedData; 
        setLista(updatedList);
        setVisibleModal(false);
        setShowEditModal(false);

    };

    const handleDelete = () => {
        onDelete(data);
        setVisibleModal(false);
    }

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => setVisibleModal(true)}>
                <View style={styles.cardLista}>
                
                    <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="shuriken" size={24} color="black" />
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.label}>{data.label}</Text>

                        <Text style={data.type === 1 ? styles.value : styles.saidas}>
                        {data.type === 1 ? `R$ ${parseFloat(data.value).toFixed(2)}` : `R$ -${parseFloat(data.value).toFixed(2)}`}
                        </Text>

                        <Text style={styles.category}>{data.category}</Text>
                        
                    </View>

                    <Text style={styles.date}>{data.date}</Text>
                </View>
            </TouchableOpacity>

            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
                animationType='slide'
            >
                <ActionModal
                    handleClose={() => setVisibleModal(false)}
                    handleDelete={handleDelete}
                    handleEdit={() => setEditModalVisible(true)}
                />
            </Modal>

            <Modal
                visible={editModalVisible}
                transparent={true}
                onRequestClose={() => setEditModalVisible(false)}
                animationType='slide'
            >
            
                <ModalEdit
                    data={editedData}
                    onSave={handleSaveEdit}
                    onCancel={() => setEditModalVisible(false)} //fechando o modal edit
                />
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 360,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingBottom: 10,
        paddingTop: 10,
        marginStart: 16,
        marginEnd: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
        borderRadius: 5,
        marginTop: 12,
        alignSelf: 'center',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    cardLista: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        marginRight: 15,
        marginLeft: 10,
    },
    textContainer: {
        flex: 1, // Para ocupar todo o espaço disponível
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold',
        textAlign: 'center', // Centraliza a data
        marginRight: 8,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    value: {
        fontSize: 15,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    saidas: {
        fontSize: 15,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
});
