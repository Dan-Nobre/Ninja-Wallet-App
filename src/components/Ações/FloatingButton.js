import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Animated } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function FloatingButton({ toggleAddButton, toggleShoppingButton }) {
    const [icon_1] = useState(new Animated.Value(40));
    const [icon_2] = useState(new Animated.Value(40));
    
    const [pop,setPop] = useState(false);

    const popIn = () => {
        setPop(true);
        Animated.timing(icon_1, {
            toValue: 130,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_2, {
            toValue: 110,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }
    

    const popOut = () => {
        setPop(false);
        Animated.timing(icon_1, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_2, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }

    const navigation = useNavigation();
    
    const addCash = () => {
        navigation.navigate('Adicionar Saldo');
        toggleAddButton(); // Ocultar o botão "Adicionar" após a navegação
        popOut(); // Fechar o botão flutuante
    };

    const registerShopping = () => {
        navigation.navigate('Registrar Compras');
        toggleShoppingButton(); // Ocultar o botão "Compras" após a navegação
        popOut(); // Fechar o botão flutuante
    };

    return (
        <View style={{flex: 1,}}>
            <Animated.View style={[styles.circle, {bottom: icon_1}]}>
                <TouchableOpacity onPress={addCash}>
                    <MaterialIcons name='attach-money' size={25} color='white'></MaterialIcons>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[styles.circle, { bottom: icon_2, right: icon_2}]}>
                <TouchableOpacity onPress={registerShopping}>
                    <Icon name='shopping-cart' size={25} color='white'></Icon>
                </TouchableOpacity>
            </Animated.View>

            <TouchableOpacity style={styles.circle} onPress={() => { pop === false ? popIn() : popOut() }}>
                <Icon name='plus' size={25} color='white'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        backgroundColor: '#1E215C',
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 40,
        right: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})