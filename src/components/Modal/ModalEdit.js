// ModalEdit.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function ModalEdit({ data, onSave, onCancel }) {
    const [editedLabel, setEditedLabel] = useState(data.label);
    const [editedValue, setEditedValue] = useState(data.value.toString());

    const handleSave = () => {
        const editedItem = {
            ...data,
            label: editedLabel,
            value: parseFloat(editedValue) || 0,
        };
    
        onSave(editedItem);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Editar Item:</Text>
            <TextInput
                style={styles.input}
                value={editedLabel}
                onChangeText={(text) => setEditedLabel(text)}
            />
            <TextInput
                style={styles.input}
                value={editedValue}
                onChangeText={(text) => setEditedValue(text)}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.salvarTextButton}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                <Text style={styles.cancelarTextButton}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
    saveButton:{
        zIndex: 99,
        backgroundColor: '#DED8A1',
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
    cancelButton:{
        zIndex: 99,
        backgroundColor: '#DED8A1',
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
    salvarTextButton:{
        textAlign: 'center',
        fontWeight: 'bold',
    },
    cancelarTextButton:{
        textAlign: 'center',
        fontWeight: 'bold',
    }
});
