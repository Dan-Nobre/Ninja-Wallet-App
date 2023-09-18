import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddDataScreen({ navigation }) {
    const [label, setLabel] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState(new Date());
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

    const handleAddData = () => {
        const newItem = {
            id: Math.random(),
            label: label,
            value: parseFloat(value) || 0,
            date: selectedDate.toString(), // Converter a data para string
            category: category,
            type: type === 'Receita' ? 1 : 0,
        };

        navigation.navigate('Home', { newItem });
    };

    const showDatePickerModal = () => {
        setIsDatePickerVisible(true);
    };

    const hideDatePickerModal = () => {
        setIsDatePickerVisible(false);
    };

    const confirmDate = (selectedDate) => {
        setSelectedDate(selectedDate.toLocaleDateString()); // Converter a data para string
        hideDatePickerModal();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição:</Text>
            <TextInput
                style={styles.input}
                value={label}
                onChangeText={setLabel}
            />
            <Text style={styles.label}>Valor:</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Data:</Text>
            <TextInput
                style={styles.input}
                placeholder="Data Selecionada"
                value={selectedDate}
                editable={false}
            />
            <TouchableOpacity style={styles.selectedDateButton} onPress={showDatePickerModal}>
                <Text style={styles.textButtonAddDate}>
                    Selecionar Data
                </Text>
            </TouchableOpacity>
            {isDatePickerVisible && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={(event, selectedDate) => confirmDate(selectedDate)}
                />
            )}
            <Text style={styles.label}>Categoria:</Text>
            <TextInput
                style={styles.input}
                value={category}
                onChangeText={setCategory}
            />
            <TouchableOpacity style={styles.buttonAdd} onPress={handleAddData}>
                <Text style={styles.textButtonAdd}> Adicionar </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
    textButtonAdd: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'green',
    },
    buttonAdd: {
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
    selectedDateButton:{
        zIndex: 99,
        backgroundColor: 'white',
        borderRadius: 6,
        marginTop: 8,
        marginBottom: 8,
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
    textButtonAddDate: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
});
